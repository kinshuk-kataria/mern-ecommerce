const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');

module.exports.registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error('User already exists');
  }

  //create a new user
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    res.status(400).json({ msg: 'Please enter all fields' });

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    //validate password

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.json({ msg: 'Invalid credentials' });

      jwt.sign(
        { id: user._id },
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
};

module.exports.get_user = (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
};
