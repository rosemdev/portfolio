export default class Cursor {
    constructor(target) {
        this.cursor = document.querySelector('.cursor');
        this.target = target;

        this.xPos = 0;
        this.yPos = 0;

        console.log(this.target);
    }

    moveCursor(event) {
        let cursorBounds = this.cursor.getBoundingClientRect();
        this.xPos = event.pageX - cursorBounds.width / 2;
        this.yPos = event.pageY - cursorBounds.height / 2;

        // console.log(this.xPos + " " + this.xPos, null !== this.target);

        // this.cursor.style.transform = `translate3d(${this.xPos}px,  ${this.yPos}px, 0), scale(5)`;

        this.cursor.style.left = this.xPos + ('px');
        this.cursor.style.top = this.yPos + ('px');
    }

    initCursor() {
        this.moveCursor = this.moveCursor.bind(this);

        document.addEventListener("mousemove", this.moveCursor, false);
        requestAnimationFrame(this.moveCursor);
        this.moveCursor();
    }

    _update(event) {
        if (event.type === 'mousemove') {
            this.cursor.classList.add('target-is-hovered');
            const {offsetX: x, offsetY: y} = event,
                {offsetWidth: width, offsetHeight: height} = this.target,

                stagger = 15,

                xStagger = (x / width) * (stagger * 2) - stagger,
                yStagger = (y / height) * (stagger * 2) - stagger;

            console.log(xStagger, yStagger);

            this.target.style.transform = `translate3d(${xStagger}px, ${yStagger}px, 0)`;

            console.log(event.type);

        } else if (event.type === 'mouseleave') {
            this.cursor.classList.remove('target-is-hovered');
            this.target.style.transform = 'translate3d(0px, 0px, 0)';

        }

        if (!this._checkTarget) {

            // console.log(!this._checkTarget, 'test');
        }
    }

    _checkTarget() {
        return (null === this.target);
    }

    setMovement() {
        // if (!this._checkTarget) {
        //     return
        // }
        //

        this._update = this._update.bind(this);
        this.target.addEventListener('mousemove', this._update);
    }

    setStaticPosition() {
        // if (!this._checkTarget) {
        //     return
        // }

        this._update = this._update.bind(this);
        this.target.addEventListener('mouseleave', this._update);
    }

    I
}

