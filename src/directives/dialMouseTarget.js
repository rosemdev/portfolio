import Cursor from "../utils/cursor";

const cursor = new Cursor({
    cursorClass: 'cursor',
    targetHoveredClass: 'target-is-hovered',
});



export default {
    bind(el) {
        if (window.innerWidth > 1200) {
            cursor.addElement(el);
        }
    },
    unbind(el) {
        cursor.removeElement(el);
    }
}
