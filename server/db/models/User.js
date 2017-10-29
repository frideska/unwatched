const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

let Schema = mongoose.Schema

/**
 * Define Shema for User
 */
let User = new Schema({
	google: {
		id: { type: String, required: true, unique: true },
		token: { type: String, required: true, unique: true },
		name: { type: String, required: true },
		image: { type: String },
		email: { type: String }
	},
	admin: { type: Boolean, default: false },
    fullname: { type: String },
    updated: { type: Date, default: Date.now },
	date: { type: Date, default: Date.now }
})

User.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.local.password)
}

User.statics.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User = mongoose.model('User', User)

module.exports = User
