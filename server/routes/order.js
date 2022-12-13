const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/orderControllers');

router.get('/order/:id', orderController.get_orders);
