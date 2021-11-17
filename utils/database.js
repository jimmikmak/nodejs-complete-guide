const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Taurus27", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
