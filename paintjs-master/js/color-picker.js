class ColorPicker {
    constructor({ element }) {
        this.element = element;
        this.previewElement = null;

        this.color = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.init();
    }

    init() {
        this.previewElement = this.element.querySelector('.color-picker__preview');
        this.setPreviewBackground(this.color);

        this.element.querySelectorAll('.color-picker__slider')
            .forEach(slider => slider.addEventListener('change', this.handleChange.bind(this)));
        
    }

    handleChange(event) {
        let slider = event.target;
        this.color[slider.id] = Number(slider.value);  
        this.setPreviewBackground(this.color);
    }
 
    setPreviewBackground(color) {
        this.previewElement.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
    }

    open() {
        this.element.style.display = 'block';
    }

    close() {
        this.element.style.display = 'none';
    }
}