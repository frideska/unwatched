const tvDetails = async (id) => {
    try {
        return await tmdb.tv.details(
            {
              movie_id: id || ''
            }
        )
    } catch (err) {
        console.error(err)
      return null
    }
}
const movieDetails = async (id) => {
  try {
    return await tmdb.movie.details(
      {
        movie_id: id || ''
      }
    )
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  movieDetails,
  tvDetails
}
