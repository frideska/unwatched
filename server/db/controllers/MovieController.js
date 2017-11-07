const UserMovie = require('../models/UserMovie')
const User = require('../models/User')


let newMovie = async (movieID, user) => {
  let movie = UserMovie.findOne({movie_id: movieID.toString(), user: user._id})
  console.log(user)
  if(!movie){
    let userMovie = new UserMovie()
    userMovie.movie_id = movieID
    userMovie.user = user._id
    userMovie.save((err) =>  {
        if (err) return handleError(err);
      })
  }
}

let findMovieForUser = async (user) => {
  return await UserMovie.find({})
}

module.exports = {
  newMovie,
  findMovieForUser
}
