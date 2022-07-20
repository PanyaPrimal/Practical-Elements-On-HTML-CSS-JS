class App {
    constructor({ canvas, colorPalette, colorPicker }) {
        this.canvas = canvas;
        this.colorPalette = colorPalette;
        this.colorPicker = colorPicker;

        this.context = null;
        this.isDrawing = false;

        this.init();
    }

    init() {
        this.context = this.canvas.getContext('2d');

        this.canvas.addEventListener('mousedown', this.handleCancasMousedown);
        this.canvas.addEventListener('mousemove', this.handleCancasMousemove);
        this.canvas.addEventListener('mouseup', this.handleCancasMouseup);
        this.canvas.addEventListener('mouseleave', this.handleCancasMouseleave);
    }


    handleCancasMousedown(event) {
        console.log(event);
        this.lastEvent = event;
        this.isDrawing = true;
    }

    handleCancasMousemove(event) {

    }

    handleCancasMouseup(event) {

    }

    handleCancasMouseleave(event) {

    }

}