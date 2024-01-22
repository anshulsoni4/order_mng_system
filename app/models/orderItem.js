const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const OrderItem = db.define('orderItem', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = OrderItem;
