export default class Cursor {
    constructor(options = {}) {
        this.options = options;
        this.targetCollection = [];
        this.cursorContainer = document.createElement('div');
        this.cursorContainer.style.position = 'fixed';
        this.cursorContainer.style.top = '0';
        this.cursorContainer.style.left = '0';
        this.cursorContainer.style.zIndex = '10000';
        this.cursorContainer.style.pointerEvents = 'none';
        this.cursor = document.createElement('div');
        this.cursor.classList.add(this.options.cursorClass);
        this.cursorContainer.appendChild(this.cursor);
        document.body.appendChild(this.cursorContainer);

        this.moveCursor = this.moveCursor.bind(this);
        this.enter = this.enter.bind(this);
        this.moveTarget = this.moveTarget.bind(this);
        this.leave = this.leave.bind(this);

        document.addEventListener('mousemove', this.moveCursor, false);

    }

    enter(event) {
        this.cursor.classList.add(this.options.targetHoveredClass);
        event.currentTarget.addEventListener('mousemove', this.moveTarget);
    }

    leave(event) {
        let currentTarget = event.currentTarget;

        this.cursor.classList.remove(this.options.targetHoveredClass);
        currentTarget.removeEventListener('mousemove', this.moveTarget);

        requestAnimationFrame(() => {
            currentTarget.style.transform = 'translate3d(0px, 0px, 0px)';
        });
    }

    moveTarget(event) {
        let currentTarget = event.currentTarget;

        requestAnimationFrame(() => {
            const {offsetX: x, offsetY: y} = event;
            const {offsetWidth: width, offsetHeight: height} = currentTarget;
            const stagger = 15;
            const xStagger = (x / width) * (stagger * 2) - stagger;
            const yStagger = (y / height) * (stagger * 2) - stagger;

            currentTarget.style.transform = `translate3d(${xStagger}px, ${yStagger}px, 0)`;
        });
    }

    moveCursor(event) {
        requestAnimationFrame(() => {
            this.xPos = event.clientX - this.cursor.offsetWidth / 2;
            this.yPos = event.clientY - this.cursor.offsetHeight / 2;
            this.cursorContainer.style.transform = `translate3d(${this.xPos}px,  ${this.yPos}px, 0px)`;
        });
    }

    addElement(element) {
        this.targetCollection.push(element);

        element.addEventListener('mouseenter', this.enter);
        element.addEventListener('mouseleave', this.leave);
        console.log(this.targetCollection);

    }

    removeElement(element) {
        const index = this.targetCollection.indexOf(element);

        if (index >= 0) {
            this.targetCollection.splice(index, 1);
            element.removeEventListener('mouseenter', this.enter);
            element.removeEventListener('mouseleave', this.leave);

        }

    }
}
