const UserMovie = require('../models/UserMovie')

let newMovie = async ( movieID, userID) => {
  new UserMovie({movie_id: movieID, user_id: userID})
}
let findMovieForUser = async (userID) => {
  return await UserMovie.find({user_id: userID})
}

module.exports = {
  newMovie,
  findMovieForUser
}
