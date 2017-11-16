


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
        response =  await Promise.all(response.results.map(async (result) => {
          if (result.media_type == 'tv') {
            return await {
              'id': result.id,
              'title': result.name,
              'genres': await GenreController.getGenreTv(result.genre_ids),
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
            return await{
              'id': result.id,
              'title': result.title,
              'genres': await GenreController.getGenreMovie(result.genre_ids),
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
        }))
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
