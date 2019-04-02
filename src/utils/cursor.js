export default class Cursor {
    constructor(options = {}) {
        this.options = options;
        this.target = options.target;
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
        this.target.addEventListener('mouseenter', this.enter);
        this.target.addEventListener('mouseleave', this.leave);
    }

    enter() {
        this.cursor.classList.add(this.options.targetHoveredClass);
        this.target.addEventListener('mousemove', this.moveTarget);
    }

    leave() {
        this.cursor.classList.remove(this.options.targetHoveredClass);
        this.target.removeEventListener('mousemove', this.moveTarget);

        requestAnimationFrame(() => {
            this.target.style.transform = 'translate3d(0px, 0px, 0px)';
        });
    }

    moveTarget(event) {
        requestAnimationFrame(() => {
            const {offsetX: x, offsetY: y} = event;
            const {offsetWidth: width, offsetHeight: height} = this.target;
            const stagger = 15;
            const xStagger = (x / width) * (stagger * 2) - stagger;
            const yStagger = (y / height) * (stagger * 2) - stagger;

            this.target.style.transform = `translate3d(${xStagger}px, ${yStagger}px, 0)`;
        });
    }

    moveCursor(event) {
        requestAnimationFrame(() => {
            this.xPos = event.clientX - this.cursor.offsetWidth / 2;
            this.yPos = event.clientY - this.cursor.offsetHeight / 2;
            this.cursorContainer.style.transform = `translate3d(${this.xPos}px,  ${this.yPos}px, 0px)`;
        });
    }
}
