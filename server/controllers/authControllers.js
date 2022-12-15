const User = require('../models/User');
const config = require('config');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

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

module.exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check if the user exist in db
  const user = await User.findOne({ email });

  //validate password
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userToken: generateToken(user._id)
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports.get_user = (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
};
