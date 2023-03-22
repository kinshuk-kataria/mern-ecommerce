const Order = require('../models/Order');
const Cart = require('../models/Cart');
const User = require('../models/User');
const { createOrder, capturePayment } = require('../helpers/paypal-api');
const Razorpay = require('razorpay');
const config = require('config');
const { validatePaymentVerification } = require('../utils/razorPay');

module.exports.createOrders = async (req, res) => {
  const { userId, cartId } = req.body;

  const userCart = await Cart.findById({ _id: cartId });
  const cartUserId = await userCart.userId.slice(1);

  //verify if cart is associated to the specific user before proceeding

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
          bill: amountValue,
          status: 'Processing'
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
  const { orderID } = req.params;
  const captureData = await capturePayment(orderID);

  /*if (captureData.status === 200) {
    const order = Order.findById({ captureData.id });
  }
  else {
    
  }*/

  res.json(captureData);
};

module.exports.createRazorPayOrder = async (req, res) => {
  const { userId, cartId } = req.body;
  const userCart = await Cart.findById({ _id: cartId });
  const cartUserId = await userCart.userId.slice(1);

  if (cartUserId === userId) {
    const amountValue = userCart.bill * 100;
    const items = userCart.items;

    let rzp = new Razorpay({
      key_id: config.get('RAZOR_PAY_ID'),
      key_secret: config.get('RAZOR_PAY_SECRET')
    });
    try {
      rzp.orders
        .create({
          amount: amountValue,
          currency: 'INR',
          receipt: 'recipt#1',
          notes: {
            key1: 'value3',
            key2: 'value4'
          }
        })
        .then(data => {
          {
            res.json(data);
            Order.create({
              _id: data.id,
              userId,
              items,
              bill: amountValue,
              status: 'Processing'
            });
          }
        });
    } catch (err) {
      res.status(500);
    }
  }
};

module.exports.verifyRazorpayPayment = async (req, res) => {
  const { order_id } = req.body;

  let verifyPayment = validatePaymentVerification(
    { order_id: order_id, payment_id: req.body.razorpay_payment_id },
    req.body.razorpay_signature,
    config.get('RAZOR_PAY_SECRET')
  );
  if (verifyPayment.isValid) {
    res.json(verifyPayment);
    await Order.updateOne(
      { _id: order_id },
      {
        $set: {
          status: 'Success'
        }
      }
    );
  } else {
    await Order.updateOne(
      { _id: req.body.error.metadata.order_id },
      {
        $set: {
          status: 'Failed'
        }
      }
    );
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });
    res.status(201).json(orders);
  } catch (err) {
    res.send(500).send(err);
  }
};
