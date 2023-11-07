const Sequelize = require('sequelize');

const connection = new Sequelize(
  'guia_perguntas',
  'root',
  'vbbdeorj631228',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = connection;