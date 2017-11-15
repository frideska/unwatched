/**
 * Main exporter for the Discover Feature.
 */

/**
 * Optionals:
 * region
 * sort_by
 * certification_country
 * certification
 * certification.lte
 * include_adult
 * include_video
 * page
 * primary_release_year
 * primary_release_date.gte
 * primary_release_date.lte
 * release_date.gte
 * release_date.lte
 * vote_count.gte
 * vote_count.lte
 * vote_average.gte
 * vote_average.lte
 * with_cast
 * with_crew
 * with_companies
 * with_genres
 * with_keywords
 * with_people
 * year
 * without_genres
 * with_runtime.gte
 * with_runtime.lte
 * with_release_type
 * with_original_language
 */



const GenreController = require('../../db/Controllers/GenreController')

const movie = async () => {
    try {
        const results = await tmdb.discover.movie(
            {
                region: '',
                sort_by: '',
                certification_country: '',
                certification: '',
                include_adult: '',
                include_video: '',
                page: '',
                primary_release_year: '',
                with_cast: '',
                with_crew: '',
                with_companies: '',
                with_genres: '',
                with_keywords: '',
                with_people: '',
                year: '',
                without_genres: '',
                with_release_type: '',
                with_original_language: ''
            }
        )
      return await Promise.all(results.results.map(async result => {
        return await {
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
      }))

    } catch (err) {
        console.error(err)
    }
}

/**
 * Optionals:
 * sort_by
 * air_date.gte
 * air_date.lte
 * first_air_date.gte
 * first_air_date.lte
 * first_air_date_year
 * page
 * timezone
 * vote_average.gte
 * vote_count.gte
 * with_genres
 * with_networks
 * without_genres
 * with_runtime.gte
 * with_runtime.lte
 * include_null_first_air_dates
 * with_original_language
 */
const tv = async () => {
    try {
        const results = await tmdb.discover.tv(
            {
                sort_by: '',
                first_air_date_year: '',
                page: '',
                timezone: '',
                with_genres: '',
                with_networks: '',
                without_genres: '',
                include_null_first_air_dates: '',
                with_original_language: ''
            }
        )
      return await results.results.map(result => {
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
          'media_type': result.media_type
        }
      })
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    movie, tv
}
