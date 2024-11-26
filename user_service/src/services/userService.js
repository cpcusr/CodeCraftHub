const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return { username: user.username };
};

exports.authenticateUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid username or password');
  }
  const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
  return token;
};