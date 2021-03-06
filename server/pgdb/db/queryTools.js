
const configureOrder = (order = 'ASC', orderBy = 'title') => {
  if (orderBy.charAt(0) === '-') {
    orderBy = orderBy.substring(1)
    order = 'DESC'
  }
  return { order: order || 'ASC', orderBy: orderBy || 'title' }
}

const configureYears = (years) => {
  let startYear = 1900
  let endYear = 2099
  if (years) {
    years = years.split('-')
    const y1 = parseInt(years[0], 10)
    const y2 = parseInt(years[1], 10)
    if (y1 < y2) {
      if (y1 > 1900 && y1 < 2099) {
        startYear = y1
      }
      if (y1 > 1900 && y1 < 2099) {
        endYear = y2
      }
    }
  }
  startYear = startYear || 1900
  endYear = endYear || 2099
  return { startYear: new Date().setFullYear(startYear), endYear: new Date().setFullYear(endYear) }
}

const configurePages = (page = 1, size = 10) => {
  if (page < 1) {
    page = 1
  }
  if (size < 1) {
    size = 1
  }
  return { page: page || 1, size: size || 10 }
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
        max = end
      }
    }
  }
  return { ratingMin: min || 0.0, ratingMax: max || 10.0 }
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
    return options
  }
}
