import IntersectionAnimation from "../utils/IntersectionAnimation";

const intersectionAnimation = new IntersectionAnimation();

export default {
    bind(el) {
        el.classList.add('box-to-scroll');
        intersectionAnimation.addElement(el);
    },
    unbind(el) {
        el.classList.remove('box-to-scroll');
        intersectionAnimation.removeElement(el);
    }
}
