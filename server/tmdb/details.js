const details = async (id) => {
    try {
        return await tmdb.movie.details(
            {
              movie_id: id || '',
            }
        )
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
  details
}