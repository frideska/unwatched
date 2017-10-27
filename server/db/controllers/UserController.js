
const User = require('../models/User')

/**
 * Controller function for finding a User by its Google ID.
 * @param {String} id Google ID.
 * @returns {User} A single User object.
 */
module.getByGoogle = async (id) => {
    try {
        return await User.findOne({ 'google.id': id})
    } catch (err) {
        console.error(err)
    }
}

/**
 * Controller function for retrieving a User by its '_id' from the database.
 * @param {ObjectId} id User _id (created by database).
 * @returns {User} A single User object.
 */
module.getOne = async (id) => {
    try {
        return await User.findById(id)
    } catch (err) {
        console.error(err)
    }
}

/**
 * Controller function for saving a User.
 * @param {User} user A single User object.
 * @returns {User} The updated User object.
 */
module.save = async (user) => {
    try {
        return await user.save()
    } catch (err) {
        console.error(err)
    }
}
