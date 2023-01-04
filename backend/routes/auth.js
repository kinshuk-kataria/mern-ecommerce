const { Router } = require('express');
const authController = require('../controllers/authControllers');
const protect = require('../middleware/authmiddleware');

const router = Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile', protect, authController.getUserProfile);

module.exports = router;
