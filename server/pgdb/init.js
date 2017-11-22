
process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message)
})

const Users = require('./db/controllers/UserController')
const Movies = require('./db/controllers/MovieController')
const Movie = require('./db/models/index').Movie

const getUsers = async () => {
  return await Users.getAllUsers()
}

const createUser = async () => {
  return await Users.findOrCreateUser('ihsdgihdsigh')
}

const getMovies = async () => {
  return await Movies.getAll()
}

const main = async () => {
  console.log('stuff')
  console.log('stuff2')
  const movies = await getMovies()
  console.log('stuff3')

  console.log('before')
  console.log(movies.length)
  console.log('After')
}

main()
