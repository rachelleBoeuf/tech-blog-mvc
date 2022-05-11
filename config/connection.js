const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('mysql://b961ec9fec1648:ba452379@us-cdbr-east-05.cleardb.net/heroku_a621a156a1f741d?reconnect=true');

}

module.exports = sequelize;
