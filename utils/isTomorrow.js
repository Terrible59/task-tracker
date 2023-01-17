export default function isTomorrow(date) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString() === date.toDateString();
}