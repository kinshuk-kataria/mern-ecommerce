const { Router } = require('express');
const itemControllers = require('../controllers/itemControllers');

const router = Router();

router.get('/items', itemControllers.getItems);

module.exports = router;
