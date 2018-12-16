import parse from 'date-fns/parse'
import format from 'date-fns/format'

export  default function  getDate(date) {
    const formattedDate = parse(date);

    return {
        date: format(formattedDate, 'MMM DD'),
        year: formattedDate.getFullYear()
    }

}