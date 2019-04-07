import Cursor from "../utils/cursor";

const cursor = new Cursor({
    cursorClass: 'cursor',
    targetHoveredClass: 'target-is-hovered',
});

export default {
    bind(el) {
        cursor.addElement(el);
    },
    unbind(el) {
        cursor.removeElement(el);
    }
}
