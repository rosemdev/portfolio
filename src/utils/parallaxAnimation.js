export default class ParallaxAnimation {
    scrollContainer;
    elementCollection = [];

    constructor(scrollContainer = window) {
        this.scrollContainer = scrollContainer;
        this.onScroll = this.onScroll.bind(this)
    }

    initialize() {
        this.scrollContainer.addEventListener('scroll', this.onScroll, {passive: true});
    }

    destroy() {
        this.scrollContainer.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        this.elementCollection.forEach(element => {
            // do some logic here concerning event details
            let speed = (Math.random() * 0.1).toFixed(2),
                yPos = (element.getBoundingClientRect().top * speed).toFixed(1);

            element.classList.add("scrolling");
            element.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    }

    addElement(element) {
        // Lazy initialization
        if (0 === this.elementCollection.length) {
            this.initialize();
        }

        this.elementCollection.push(element)
    }

    removeElement(element) {
        const index = this.elementCollection.indexOf(element);

        this.elementCollection.splice(index, 1);
        element.style.transform = 'translate3d(0px, 0px, 0px)';

        if (0 === this.elementCollection.length) {
            this.destroy();
        }
    }
}
