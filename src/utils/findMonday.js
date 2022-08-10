export default function findMonday(date) {
    const res = new Date(date)
    const dayOfWeek = res.getDay()
    res.setDate(res.getDate() - dayOfWeek + 1)
    res.setHours(0)
    res.setMinutes(0)
    res.setSeconds(0)
    return res
}