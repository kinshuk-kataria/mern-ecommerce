const Item = require('../models/Item');
const asyncHandler = require('express-async-handler');

module.exports.getItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.json(items);
});
