export default function addDays(date, days) {
    const res = new Date(date);
    res.setDate(date.getDate() + days);
    return res;
}
