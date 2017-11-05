const UserMovie = require('../models/UserMovie')

let newMovie = async (movieID, user) => {
  let movie = UserMovie.findOne({movie_id: movieID, user: user})
  if(!movie){
    UserMovie.create({movie_id: movieID, user: user}, (err) => {
      console.log(err)
    })
  }
}

let findMovieForUser = async (user) => {
  return await UserMovie.find({user: user})
}

module.exports = {
  newMovie,
  findMovieForUser
}
