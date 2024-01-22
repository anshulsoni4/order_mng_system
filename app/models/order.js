const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const Order = db.define('order', {
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Order;
