export default class Pixel {
    constructor(x, y,config = {
        r: 0, // R value
        g: 0, // G value
        b: 0, // B value
        a: 1, // A value
        colorSpace: "srgb"
    }) {
        this.x = x;
        this.y = y;
        this.r = config.r; 
        this.g = config.g; 
        this.b = config.b; 
        this.a = config.a; 
        this.colorSpace = config.colorSpace;
    }
}