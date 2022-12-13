const { Router } = require('express');
const cartContoller = require('../controllers/cartControllers');
const router = Router();

router.get('/cart/:id', cartContoller.get_cart_items);
router.post('/cart/:id', cartContoller.add_cart_item);
router.put('/cart/:id', cartContoller.update_cart_item);
rouiter.delete('/cart/:userId/:itemId', cartContoller.delete_cart_item);
