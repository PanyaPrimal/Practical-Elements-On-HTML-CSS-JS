class ColorPalette {
    constructor({ element, colors = [] }) {
        this.element = element;
        this.colorElements = [];

        this.colors = colors;
        this.currentColor = null;

        this.init();
    }

    init() {
        this.element.addEventListener('click', this.handColorSelected.bind(this));

        for (let color of this.colors) {
            let li = document.createElement('li');
            li.className = 'color-palette__color';
            li.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
            this.element.appendChild(li);
            this.colorElements.push(li);
        }
    }
    handColorSelected({target}) {
        if (target.tagName === 'LI') {
            this.currentColor = target.style.backgroundColor;

            for (let colorElement of this.colorElements) {
                colorElement.classList.remove('selected')
            }

            target.classList.add('selected')
        }
    }

    addColor(color) {
        console.log(color);
    }
}