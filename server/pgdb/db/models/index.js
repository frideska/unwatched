// ///////////////////////////////////////////////////
// Setup for Sequalize connection
// ///////////////////////////////////////////////////

// Constants declarations
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const basename = path.basename(module.filename)

// Dictionary to store references to the models
let db = {}

const dbUrl = 'postgres://postgres:postgres@127.0.0.1:5432/dev2'

var sequelize = new Sequelize(dbUrl, { logging: false })

// Adds all models to the database dictionary, "db"
try {
  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(function (file) {
      var model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
    })

  Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      console.log(modelName)
      db[modelName].associate(db)
    }
  })
} catch (err) {
  console.error(err)
}

/*const User = sequelize.import('./User')
const Movie = sequelize.import('./Movie')
const Series = sequelize.import('./Series')
const UserHistory = sequelize.import('./UserHistory')*/

/*User.belongsToMany(Movie, {
  through: 'Watchlist'
})
User.belongsToMany(Series, {
  through: 'Watchlist'
})
UserHistory.hasMany(Series, {
  foreignKey: {
    allowNull: true
  }
})
UserHistory.hasMany(Movie, {
  foreignKey: {
    allowNull: true
  }
})
User.belongsToMany(Movie, {
  through: 'Library'
})
User.belongsToMany(Series, {
  through: 'Library'
})
Movie.belongsToMany(User, {
  through: 'Watchlist'
})
Movie.belongsToMany(User, {
  through: 'Library'
})
Series.belongsToMany(User, {
  through: 'Watchlist'
})
Series.belongsToMany(User, {
  through: 'Library'
})*/

/*db.User = User
db.Movie = Movie
db.UserHistory = UserHistory
db.Series = Series*/

db.sequelize = sequelize
db.Sequelize = Sequelize

// Sequelize authenticates with the database and syncs if it's successful.
sequelize
  .authenticate()
  .then(function (auth) {
    console.log('[sequelize] Connection has been established successfully.')
  }).then(function () {
    sequelize
      .sync()
      .then(function (err) {
        if (err && process.env.DEBUG) {
          console.error(err)
        }
        console.log('[sequelize] Database sync complete')
        if (process.env.VIESTINTA_INIT_DATABASE) {
          require('../../init')
        }
      }, function (err) {
        console.error('[sequelize] An error occurred while creating the table:', err)
      })
  })
  .catch(function (err) {
    console.error('[sequelize] Unable to connect to the database:', err)
  })

// exports db object with all relevant references to models
module.exports = db
