const Sequelize = require('sequelize')
var path = require('path')
var env = require(path.resolve( __dirname, ".env.js" ))
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  dialect: env.DATABASE_DIALECT,
  port: env.PORT,
  define: {
    underscored: true, // table column names are snake_case not camelCase !!
  	timestamps: false
  }
})

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../models/users.js')(sequelize, Sequelize)
db.batches = require('../models/batches.js')(sequelize, Sequelize)
db.members = require('../models/members.js')(sequelize, Sequelize)

//Relations
db.members.belongsTo(db.batches)
db.batches.hasMany(db.members)

module.exports = db

