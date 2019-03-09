export default class ParallaxAnimation {
    scrollContainer;
    elementCollection = [];

    constructor(scrollContainer = window) {
        this.scrollContainer = scrollContainer;
        this.onScroll = this.onScroll.bind(this)
    }

    initialize() {
        this.scrollContainer.addEventListener('scroll', this.onScroll);
    }

    destroy() {
        this.scrollContainer.removeEventListener('scroll', this.onScroll);
    }

    onScroll(event) {
        this.elementCollection.forEach(element => {
            // do some logic here concerning event details
            
            if (event) {
                let speed = element.getAttribute('speed') || 0.05;
                element.classList.add("scrolling");
                element.style.transform = `translateY(${element.getBoundingClientRect().top* speed}px)`;
            } else {
                element.classList.remove('scrolling');
            }
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

        if (0 === this.elementCollection.length) {
            this.destroy();
        }
    }
}
