export  default function  getDate(date) {
    let locale = "en-us",
        readDateFormat = new Date(date);

    return {
        date: readDateFormat.getDate() + ' ' + readDateFormat.toLocaleString(locale, {month: "short"}),
        year: readDateFormat.getFullYear()
    }

}