/**
 * Main exporter file for the TBDb wrapper.
 */

module.exports = {
    find: require('./find').find,
    details: require('./details').details,
    discover: require('./discover'),
    search: require('./search').search,
    genre: require('./genre').getGenres
}
