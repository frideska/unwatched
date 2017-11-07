/**
 * Main exporter file for the TBDb wrapper.
 */

module.exports = {
    find: require('./find').find,
    discover: require('./discover'),
    search: require('./search').search,
    movie: require('./movie')
}