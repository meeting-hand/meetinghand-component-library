export function ConvertEventDate(date, eventDateFormat) {
    switch (eventDateFormat) {
        case 'EU':
            return formatDate(new Date(date), "dd.MM.yyyy")
        default:
            return formatDate(new Date(date), "MM.dd.yyyy");
    }
    //return parse(mhDate, 'MM.dd.yyyy', new Date());
}