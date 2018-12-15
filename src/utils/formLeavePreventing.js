export default function formLeavePreventing(form) {
    let formElement;

    if (typeof form === 'string') {
        formElement = document.querySelector(form);
    } else {
        formElement = form;
    }

    let fields = formElement.querySelectorAll("input, textarea"),
        filledFields = [];

    for (let field of fields) {
        if (field.value !== '' && field.value !== ' ') {
            filledFields.push(field);
        }

    }

    if (filledFields.length >= 2) {
        return confirm('Do you really want to leave this form?');
    } else return true;


}
