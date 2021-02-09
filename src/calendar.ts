import Pikaday from "pikaday";

interface SelectedDates {
    from: string;
    to: string;
}
export const connectCalendar = (dates: SelectedDates): void => {
    const format = 'DD.MM.YYYY';
    new Pikaday({
        field: document.getElementById('depart'),
        format,
        toString: (date, format) => date.toLocaleDateString(),
        onSelect(date: Date) {
            dates.from = date.toLocaleDateString();
        }
    });
    new Pikaday({
        field: document.getElementById('return'),
        format,
        toString: (date, format) => date.toLocaleDateString(),
        onSelect(date: Date) {
            dates.to = date.toLocaleDateString();
        }
    });
}
