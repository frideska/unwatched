//const findController = require('../db/controllers/FindController')

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
        response = response.results.map((result) => {
          if (result.media_type == 'tv') {
            return {
              'id': result.id,
              'title': result.name,
              'genres': result.genre_ids,
              'overview': result.overview,
              'backdrop_path': result.backdrop_path,
              'poster_path': result.poster_path,
              'release_date': result.release_date,
              'vote_average': result.vote_average,
              'watchlist': false,
              'library': false,
              'media_type': 'tv'
            }
          }
          else if (result.media_type == 'movie') {
            return {
              'id': result.id,
              'title': result.title,
              'genres': result.genre_ids,
              'overview': result.overview,
              'backdrop_path': result.backdrop_path,
              'poster_path': result.poster_path,
              'release_date': result.release_date,
              'vote_average': result.vote_average,
              'watchlist': false,
              'library': false,
              'media_type': 'movie'
            }
          }
        })
        return response
    } catch (err) {
        console.error(err)
    }
}

const movie = async (query) => {
    try {
        return await tmdb.search.movie({
            query: query,
            include_adult: '',
            region: '',
            year: '',
            primary_release_year: ''
        })
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
