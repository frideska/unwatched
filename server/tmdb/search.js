const search = async (query) => {
    try {
        return await tmdb.search.multi(
            {
                query: query,
                include_adult: '',
                region: ''
            }
        )
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    search
}