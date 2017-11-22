
const configureOrder = (order = 'ASC', orderBy = 'title') => {
  console.log(order, orderBy)
  if (orderBy.charAt(0) === '-') {
    orderBy = orderBy.substring(1)
    order = 'DESC'
  }
  return { order, orderBy }
}

const configureYears = (years) => {
  let startYear = 0
  let endYear = 9999
  if (years) {
    years = years.split('-')
    const y1 = parseInt(years[0], 10)
    const y2 = parseInt(years[1], 10)
    if (y1 < y2) {
      if (y1 > 0 && y1 < 9999) {
        startYear = y1
      }
      if (y1 > 0 && y1 < 9999) {
        endYear = y2
      }
    }
  }
  return { startYear, endYear }
}

const configurePages = (page = 1, size = 10) => {
  if (page < 1) {
    page = 1
  }
  if (size < 1) {
    size = 1
  }
  return { page, size }
}

const configureRating = (ratings) => {
  let min = 0.0
  let max = 10.0
  if (ratings) {
    ratings = ratings.split('-')
    const start = parseFloat(ratings[0], 10)
    const end = parseFloat(ratings[1], 10)
    if (start < end) {
      if (start > 0.0 && start < 10.0) {
        min = start
      }
      if (end > 0.0 && end < 10.0) {
        min = end
      }
    }
  }
  return { min, max }
}

module.exports = {
  parse (query) {
    const { order, orderBy } = configureOrder(query.order, query.orderBy)
    const { startYear, endYear } = configureYears(query.years)
    const { page, size } = configurePages(query.page, query.size)
    const { ratingMin, ratingMax } = configureRating(query.ratings)
    const options = {
      order,
      orderBy,
      query: query.search || '',
      page,
      size,
      startYear,
      endYear,
      ratingMin,
      ratingMax
    }
    console.log(JSON.stringify(options))
    return query
  }
}
