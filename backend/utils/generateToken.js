const jwt = require('jsonwebtoken');
const config = require('config');
require('dotenv').config();

const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '12h' });
};
module.exports = generateToken;
