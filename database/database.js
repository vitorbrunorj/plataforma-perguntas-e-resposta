const Sequelize = require('sequelize');

const connection = new Sequelize(
  'guia_perguntas',
  'root',
  'suaSenha',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = connection;
