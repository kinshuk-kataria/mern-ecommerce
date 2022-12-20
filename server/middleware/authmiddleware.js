const jwt = require('jsonwebtoken');
const config = require('config');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      //extract header from authHeader string
      token = authHeader.split(' ')[1];

      //verified token returns user id
      const decoded = jwt.verify(token, config.get('jwtSecret'));

      //find user's obj in db and assign it to req.user
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized,invalid token');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized,invalid token');
  }
});

module.exports = protect;
