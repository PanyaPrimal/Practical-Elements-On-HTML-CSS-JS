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

        this.canvas.addEventListener('mousedown', this.handleCancasMousedown.bind(this));
        this.canvas.addEventListener('mousemove', this.handleCancasMousemove.bind(this));
        this.canvas.addEventListener('mouseup', this.handleCancasMouseup.bind(this));
        this.canvas.addEventListener('mouseleave', this.handleCancasMouseleave.bind(this));
    }


    handleCancasMousedown(event) {
        this.lastEvent = event;
        this.isDrawing = true;
    }

    handleCancasMousemove(event) {
        if (this.isDrawing) {
            this.context.beginPath();
            this.context.moveTo(this.lastEvent.offsetX, this.lastEvent.offsetY);
            this.context.lineTo(event.offsetX, event.offsetY);
            this.context.strokeStyle = this.colorPalette.currentColor;
            this.context.stroke();
            this.lastEvent = event;
        }
    }

    handleCancasMouseup(event) {
        this.isDrawing = false;
    }

    handleCancasMouseleave(event) {
        this.isDrawing = false;
    }

}