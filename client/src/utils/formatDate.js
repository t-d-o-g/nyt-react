export default date => {
  const thisDate = new Date(date)
  const year = thisDate.getFullYear()
  let month = (1 + thisDate.getMonth()).toString()
  month = month.length > 1 ? month : `0${month}`
  let day = date.getDate().toString()
  day = day.length > 1 ? day : `0${day}`
  return `${month}/${day}/${year}`
}
