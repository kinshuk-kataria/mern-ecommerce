const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const { createOrder, capturePayment } = require('../helpers/paypal-api');

module.exports.createOrders = async (req, res) => {
  const data = req.body;
  const { userId, cartId } = req.body;

  const userCart = await Cart.findById({ _id: cartId });
  const cartUserId = await userCart.userId.slice(1);

  //verify if cart is associated to the specific user for security purposes
  if (cartUserId === userId) {
    const amountValue = userCart.bill;
    try {
      const order = await createOrder(amountValue);
      res.json(order);

      if (order.id) {
        const items = userCart.items;
        await Order.create({
          _id: order.id,
          userId,
          items,
          bill: amountValue
        });
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  } else {
    res.status(500);
  }
};

module.exports.capture = async (req, res) => {
  console.log('Got the request -------------------------------------------');
  const { orderID } = req.params;
  console.log(orderID);
  const captureData = await capturePayment(orderID);
  res.json(captureData);
};
