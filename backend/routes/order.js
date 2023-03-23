const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/orderControllers');

router.post('/orders', orderController.createOrders);
router.post('/orders/:orderID/capture', orderController.capture);
router.post('/razor-pay-order', orderController.createRazorPayOrder);
router.post('/verify', orderController.verifyRazorpayPayment);
router.get('/get-orders/:userId', orderController.getOrders);
router.get('/success/:orderId', orderController.successOrder);

module.exports = router;
