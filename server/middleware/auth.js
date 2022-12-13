const jwt = require('jwt');
const config = require('config');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token)
    return res.status(400).json({ msg: 'No token, Authorization denied' });

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ msg: 'Token is invalid' });
  }
}

module.exports = auth;
