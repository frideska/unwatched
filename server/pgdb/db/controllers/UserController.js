
const User = require('../models/index').User

module.exports = {

  /**
   * @description Creates and returns a Promise for that user
   * @param user
   * @returns {Promise.<User, created>}
   */
  async createUser (user) {
    try {
      const u = await User.create(user)
      return u
    } catch (err) {
      console.error(err)
    }
  },

  /**
   * @description Gets a user by UserId and returns a Promise for that user
   * @param UserId
   * @returns {Promise.<User>}
   */
  async getById (id) {
    try {
      const dbUser = await User.find({
        where: { id: id },
        raw: true
      })
      return dbUser
    } catch (err) {
      console.error(err)
    }
  },

  /**
   * @description Gets all users
   * @returns {Promise.<Array.<User>>}
   */
  async getAllUsers () {
    return User.findAll()
  },

  async deleteUser (id) {
    try {
      const dbUser = await User.findOne({ where: { id: id } })
      await dbUser.destroy()
    } catch (err) {
      console.error(err)
    }
  }
}
