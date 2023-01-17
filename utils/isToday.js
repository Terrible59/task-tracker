export default function isToday(date) {
    const today = new Date();
    return today.toDateString() === date.toDateString();
}