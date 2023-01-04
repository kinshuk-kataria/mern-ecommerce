const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');

module.exports.get_orders = async (req, res) => {
  const userId = req.params.id;
  Order.find({ userId })
    .sort({ date: -1 })
    .then(orders => res.json(orders));
};
