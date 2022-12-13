const { Router } = require('express');
const itemControllers = require('../controllers/itemControllers');

const router = Router();

router.get('/items', itemControllers.get_items);
router.post('/items', itemControllers.post_item);
router.put('/items:id', itemControllers.update_item);
router.delete('/items:id', itemControllers.delete_item);

module.exports = router;
