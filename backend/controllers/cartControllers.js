const Cart = require('../models/Cart');
const Item = require('../models/Item');

module.exports.getCart = async (req, res) => {
  const userId = req.params.id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart && cart.items.length > 0) {
      res.send(cart);
    } else {
      res.send(null);
    }
  } catch (error) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

module.exports.addToCart = async (req, res) => {
  const userId = req.params.id;

  const { productId } = req.body;
  const quantity = Number.parseInt(req.body.quantity);

  try {
    let cart = await Cart.findOne({ userId });
    let itemDetails = await Item.findOne({ _id: productId });

    if (!itemDetails) {
      res.status(404).json({
        type: 'Not Found',
        msg: 'Invalid request'
      });
    }

    const price = itemDetails.price;
    const title = itemDetails.title;
    const img = itemDetails.img;

    if (cart) {
      //if cart exist for the user
      let indexFound = cart.items.findIndex(p => p.productId == productId);

      //check if product exist or not
      if (indexFound !== -1) {
        let productItem = cart.items[indexFound];

        productItem.quantity += quantity;
        cart.items[indexFound] = productItem;
      } else {
        cart.items.push({ productId, title, quantity, price, img });
      }

      cart.bill += quantity * price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //create cart if doesn't exist
      const newCart = await Cart.create({
        userId,
        items: [{ productId, title, quantity, price, img }],
        bill: quantity * price
      });

      return res.status(201).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};

module.exports.updateCart = async (req, res) => {
  const userId = req.params.id;
  const { productId, qty } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    let item = await Item.findOne({ _id: productId });

    if (!item) {
      return res.status(404).send('Item not found');
    }
    if (!cart) {
      return res.status(400).send('Cart not found');
    } else {
      let itemIndex = cart.items.findIndex(p => p.productId == productId);

      //check if product exist or not
      if (itemIndex == -1) {
        return res.status(404).send('Item not found in cart');
      } else {
        let productItem = cart.items[itemIndex];
        productItem.quantity = qty;
        cart.items[itemIndex] = productItem;
      }
      cart.bill = cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      cart = await cart.save();
      return res.status(201).send(cart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('something went worng!');
  }
};

module.exports.deleteCartItem = async (req, res) => {
  const userId = req.params.userId;
  const productId = req.params.itemId;

  try {
    let cart = await Cart.findOne({ userId });

    let itemIndex = cart.items.findIndex(p => p.productId == productId);

    if (itemIndex > -1) {
      let productItem = cart.items[itemIndex];
      cart.bill -= productItem.quantity * productItem.price;
      cart.items.splice(itemIndex, 1);
    }
    cart = await cart.save();
    return res.status(201).json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};
