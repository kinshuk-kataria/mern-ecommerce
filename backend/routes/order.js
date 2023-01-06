const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/orderControllers');

router.get('/order/:id', orderController.getOrders);
router.post('/checkout/:id', orderController.checkout);

module.exports = router;
