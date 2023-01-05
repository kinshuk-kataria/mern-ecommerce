const { Router } = require('express');
const cartController = require('../controllers/cartControllers');

const router = Router();

router.get('/cart/:id', cartController.getCart);
router.post('/cart/:id', cartController.addToCart);
router.put('/cart/:id', cartController.updateCart);
router.delete('/cart/:userId/:itemId', cartController.deleteCartItem);

module.exports = router;
