import ParallaxAnimation from './parallaxAnimation'

const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

export default class IntersectionAnimation {
    parallaxAnimation;

    constructor(options) {
        this.observeIntersection = this.observeIntersection.bind(this);
        this.parallaxAnimation = new ParallaxAnimation();
        this.intersectionObserver = new IntersectionObserver(this.observeIntersection, {
            ...defaultOptions,
            ...options
        });
    }

    addElement(element) {
        this.intersectionObserver.observe(element)
    }

    removeElement(element) {
        this.intersectionObserver.unobserve(element)
    }

    observeIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.parallaxAnimation.addElement(entry.target);

            } else {
                this.parallaxAnimation.removeElement(entry.target);
            }
        });
    }
}