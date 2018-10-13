export default function truncating(text, qty) {
    if (text.length > qty) {
        return text.toString().substring(0, qty) + '...';
    } else {
        return text
    }
}