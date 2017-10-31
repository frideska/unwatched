const find = async (id, source) => {
    try {
        return await tmdb.find(
            {
                external_id: id || '',
                external_source: source || '' 
            }
        )
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    find
}