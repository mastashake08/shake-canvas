# shake-canvas

[![NPM](https://nodei.co/npm/@mastashake08/shake-canvas.png)](https://nodei.co/npm/@mastashake08/shake-canvas/)

[![NPM version](https://img.shields.io/npm/v/@mastashake08/shake-canvas.svg)](https://www.npmjs.com/package/mastashake08/shake-canvas)
[![Build Status](https://travis-ci.org/@mastashake08/shake-canvas.svg?branch=master)](https://travis-ci.org/mastashake08/shake-canvas)
[![Coverage Status](https://coveralls.io/repos/github/mastashake08/shake-canvas/badge.svg?branch=master)](https://coveralls.io/github/mastashake08/shake-canvas?branch=master)

```markdown
# ShakeCanvas

`ShakeCanvas` is a custom HTML element that extends the functionality of the `<canvas>` element. It provides features like drawing selections, detecting colors, and saving the canvas image.

## Installation

You can install `ShakeCanvas` via npm:

```bash
npm install shake-canvas
```

## Usage

```javascript
import ShakeCanvas from "shake-canvas";

// Create a ShakeCanvas instance
const canvas = ShakeCanvas.create(500, 500, {
    enableColorPicker: true,
    enableSelect: true,
    enableSave: true
});

// Add the ShakeCanvas instance to the DOM
document.body.appendChild(canvas);
```

## API

### Constructor

```javascript
new ShakeCanvas(width, height, options)
```

- `width` (optional): The width of the canvas. Default is `250`.
- `height` (optional): The height of the canvas. Default is `250`.
- `options` (optional): An object containing options for enabling color picker, selection, and save functionalities. Default is `{ enableColorPicker: false, enableSelect: false, enableSave: false }`.

### Methods

- `enableSelect()`: Enable drawing selection on the canvas.
- `disableSelect()`: Disable drawing selection on the canvas.
- `enableColorPicker()`: Enable detecting colors on the canvas.
- `disableColorPicker()`: Disable detecting colors on the canvas.
- `enableSave()`: Enable saving the canvas image.
- `disableSave()`: Disable saving the canvas image.

### Events

- `color-detected`: Fired when a color is detected on the canvas. The event detail contains the pixel information.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShakeCanvas Example</title>
</head>
<body>
    <shake-canvas width="500" height="500" enableColorPicker enableSelect enableSave></shake-canvas>

    <script type="module">
        import ShakeCanvas from "./ShakeCanvas.js";
        customElements.define("shake-canvas", ShakeCanvas, {
            extends: 'canvas'
        });
    </script>
</body>
</html>
```




## Support

- [Patreon](https://b.remarkabl.org/patreon)
- [Ko-fi](https://b.remarkabl.org/ko-fi)
- [Liberapay](https://b.remarkabl.org/liberapay)
- [Teepsring](https://b.remarkabl.org/teespring)

## License

[MIT](https://github.com/mastashake08/shake-canvas/blob/master/LICENSE)
