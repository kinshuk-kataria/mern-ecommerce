const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = id => {
  return jwt.sign({ id }, config.get('jwtSecret'), { expiresIn: '12h' });
};
module.exports = generateToken;
