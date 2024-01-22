const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const User = db.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
