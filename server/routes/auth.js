const { Router } = require('express');
const authController = require('../controllers/authControllers');
const auth = require('../middleware/auth');

const router = Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.login);
router.get('/user', auth, authController.get_user);

module.exports = router;
