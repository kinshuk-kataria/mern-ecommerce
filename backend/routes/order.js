const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/orderControllers');

router.post('/orders', orderController.createOrders);
router.post('/orders/:orderID/capture', orderController.capture);

module.exports = router;
