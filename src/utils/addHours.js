export default function addHours(date, hours) {
  return new Date(date.getTime() + hours * 3600 * 1000);
}