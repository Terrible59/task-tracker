export default function isLater(date) {
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    return dayAfterTomorrow.getFullYear() <= date.getFullYear() &&
        dayAfterTomorrow.getMonth() <= date.getMonth() &&
        dayAfterTomorrow.getDate() <= date.getDate();
}