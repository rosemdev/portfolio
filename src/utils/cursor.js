const math = {
    lerp: (a, b, n) => {
        return (1 - n) * a + n * b
    }
};

export default class Cursor {
    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.stickies = [...document.querySelectorAll('[data-stick-cursor]')];

        console.log(this.stickies);

        this.data = {
            mouse: {
                x: 0,
                y: 0
            },
            current: {
                x: 0,
                y: 0
            },
            last: {
                x: 0,
                y: 0
            },
            ease: 0.15,
            dist: 2000,
            fx: {
                diff: 0,
                acc: 0,
                velo: 0,
                scale: 0
            }
        };

        this.bounds = {
            h: 0,
            a: 0
        };

        this.targets = null;

        this.run = this.run.bind(this);
        this.mousePos = this.mousePos.bind(this);
        this.stick = this.stick.bind(this);

        this.state = {
            stick: false
        };

        this.init()
    }

    mousePos(e) {
        this.data.mouse.x = e.pageX;
        this.data.mouse.y = e.pageY;

        this.data.current.x = e.pageX;
        this.data.current.y = e.pageY;
    }

    getCache() {
        this.targets = [];

        this.stickies.forEach((el) => {
            const bounds = el.getBoundingClientRect();

            this.targets.push({
                el: el,
                x: bounds.left + bounds.width / 2,
                y: bounds.top + bounds.height / 2
            })
        })
    }

    stick(target) {
        const d = {
            x: target.x - this.data.mouse.x,
            y: target.y - this.data.mouse.y
        };

        const a = Math.atan2(target.x - this.data.mouse.x, target.y - this.data.mouse.y);
        const h = Math.sqrt(d.x * d.x + d.y * d.y);

        // console.log(this.state.stick, h < this.data.dist);

        if (h < this.data.dist && !this.state.stick) {

            this.state.stick = true;
            this.data.ease = 0.075;

            this.data.current.x = target.x - Math.sin(a) * h / 2.5;
            this.data.current.y = target.y - Math.cos(a) * h / 2.5;

            this.cursor.classList.add('is-active');

        } else if (this.state.stick) {

            this.state.stick = false;
            this.data.ease = 0.15

        } else if (h > this.data.dist) {

            this.cursor.classList.remove('is-active')
        }
    }

    run() {
        this.targets.forEach(this.stick);

        this.data.last.x = math.lerp(this.data.last.x, this.data.current.x, this.data.ease);
        this.data.last.y = math.lerp(this.data.last.y, this.data.current.y, this.data.ease);

        this.data.fx.diff = this.data.current.x - this.data.last.x;
        this.data.fx.acc = this.data.fx.diff / window.innerWidth;
        this.data.fx.velo = +this.data.fx.acc;
        this.data.fx.scale = 1 - Math.abs(this.data.fx.velo * 5);

        this.cursor.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fx.scale})`;

        requestAnimationFrame(this.run);
    }

    addListeners() {
        window.addEventListener('mousemove', this.mousePos, {passive: true})
    }

    init() {
        this.getCache();
        this.addListeners();
        requestAnimationFrame(this.run);
    }
}
