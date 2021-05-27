const months = [
  "St",
  "lut",
  "mrz",
  "kw",
  "maj",
  "cz",
  "lip",
  "sier",
  "wrz",
  "paź",
  "lis",
  "gr",
]

const polishDate = (date) => {
  const data = new Date(date)
  return {
    day: data.getDate() < 10 ? `0${data.getDate()}` : data.getDate(),
    month: months[data.getMonth()],
    year: data.getFullYear(),
  }
}

module.exports = {polishDate}