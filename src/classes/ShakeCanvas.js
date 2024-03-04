import Pixel from "./Pixel";
export default class ShakeCanvas extends HTMLCanvasElement {
    #_shadow;
    #_saveBtn;
    static observedAttributes = ["width", "height", "enableColorPicker", "enableSelect", "enableSave"];
    static create(width = 250, height = 250) {
        return new this(width, height);
    }

    constructor(width = 250, height = 250, options = {
        enableColorPicker: false,
        enableSelect: false,
        enableSave: false
    }) {
        super();
        this.width = width;
        this.height = height;
        this.enableColorPicker = options.enableColorPicker;
        this.enableSelect = options.enableSelect;
        this.enableSave = options.enableSave;
        this.setAttribute('width', width);
        this.setAttribute('height', height);
        this.setAttribute('enableColorPicker', options.enableColorPicker);
        this.setAttribute('enableSelect', options.enableSelect);
        this.setAttribute('enableSave', options.enableSave);


    }

    connectedCallback() {
        this.#_shadow = this.attachShadow({ mode: "open" });

    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'width':
                this.width = newValue;
                break;
            case 'height':
                this.height = newValue;
                break;
            case 'enableColorPicker':
                if (newValue) {
                    this.enableColorPicker();
                } else {
                    this.disableColorPicker();
                }
                break;
            case 'enableSave':
                if (newValue) {
                    this.enableSave();
                } else {
                    this.disableSave();
                }
                break;
            default:
                break;
        }
    }

    enableSelect(e) {
        this.addEventListener('mousedown', this.drawSelection);
    }

    disableSave() {
        this.removeEventListener('mousedown', this.drawSelection);
    }

    drawSelection(e) {
        try {
            if (e.shiftKey) {
                const ctx = this.getContext("2d");
                ctx.clearRect(0, 0, this.width, this.height);
                const initialX = e.clientX - this.getBoundingClientRect().left;
                const initialY = e.clientY - this.getBoundingClientRect().top;
                this.addEventListener('mousemove', (evt) => {
                    ctx.strokeRect(initialX, initialY, evt.clientX - e.clientX, evt.clientY - e.clientY);
                });
            }

        } catch (error) {
            throw error;
        }
    }
    enableColorPicker() {
        this.addEventListener('mouseover', this.detectColor);
    }

    disableColorPicker() {
        this.removeEventListener('click', this.detectColor);
    }

    detectColor(evt) {
        if (evt.shiftKey) {
            const x = evt.offsetX;
            const y = evt.offsetY;
            const ctx = this.getContext("2d");
            const imageData = ctx.getImageData(x, y, 1, 1);

            const colors = {
                r: imageData.data[0], // R value
                g: imageData.data[1], // G value
                b: imageData.data[2], // B value
                a: imageData.data[3], // A value
                colorSpace: imageData.colorSpace
            };
            const pixel = new Pixel(x, y, colors);
            const event = new CustomEvent("color-detected", {
                detail: { pixel: pixel },
                bubbles: true
            });
            this.dispatchEvent(event);
            return pixel;
        }
    }

    enableSave() {
        this._saveBtn = document.createElement('button');
        this._saveBtn.addEventListener('click', this.save);
        this._saveBtn.innerHTML = "Save";
        this.appendChild(this.#_saveBtn);
    }

    disableSave() {
        this.removeChild(this._saveBtn);
    }

    save(e) {
        const blob = this.toBlob();
    }

}

customElements.define("shake-canvas", ShakeCanvas, {
    extends: 'canvas'
});