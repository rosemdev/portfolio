import {cursor} from "../utils/cursor"

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
