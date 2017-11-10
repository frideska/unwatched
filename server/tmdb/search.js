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
        return response
    } catch (err) {
        console.error(err)
    }
}

const movie = async (query) => {
    try {
        await tmdb.search.movie({
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
