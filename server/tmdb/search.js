
const GenreController = require('../db/controllers/GenreController')

const multi = async (query) => {
  try {
    let response = await tmdb.search.multi({
      query: query,
      include_adult: '',
      region: ''
    })
    response.results = response.results.filter((result) => {
      return result.media_type === 'movie' || result.media_type === 'tv'
    })
    response = await Promise.all(response.results.map(async (result) => {
      if (result.media_type === 'tv') {
        result.release_date = result.first_air_date
        result.title = result.name
        result.watchlist = false
        result.library = false
      } else if (result.media_type === 'movie') {
        result.watchlist = false
        result.library = false
      }
      return result
    }))
    return response
  } catch (err) {
    console.error(err)
  }
}

const movie = async (query) => {
  try {
    const results = await tmdb.search.movie({
      query: query,
      include_adult: '',
      region: '',
      year: '',
      primary_release_year: ''
    })
    console.log(`Searching for: ${query}`)
    // console.log(results)
    return results
  } catch (err) {
    console.error(err)
  }
}

const tv = async (query) => {
  try {
    return await tmdb.search.tv({
      query: query,
      first_air_date_year: ''
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  search: {
    multi, movie, tv
  }
}
