const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/orderControllers');

router.post('/orders', orderController.createOrders);
router.get('/orders/capture:id', orderController.getOrder);

module.exports = router;
