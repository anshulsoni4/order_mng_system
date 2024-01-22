const express = require('express');
const router = express.Router();
const { createOrder, updateOrder, processPayment } = require('../controllers/orderController');

router.post('/create-order', createOrder);
router.put('/update-order/:orderId', updateOrder);
router.post('/process-payment/:orderId', processPayment);

module.exports = router;
