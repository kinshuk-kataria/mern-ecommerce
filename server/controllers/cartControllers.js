const Cart = require('../models/Cart');
const Item = require('../models/Item');

module.exports.get_cart_items = async (req, res) => {
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

module.exports.add_cart_item = async (req, res) => {
  const userId = rq.params.id;
  const { productId, quantity } = req.body;

  try {
    let cart = Cart.findOne({ userId });
    let item = await Item.findOne({ _id: productId });

    if (!item) {
      res.status(404).send('Item not found');
    }

    const price = item.price;
    const name = item.name;

    if (cart) {
      //if cart exist for the user
      let itemIndex = cart.items.findIndex(p => p.productId == productId);

      //check if product exist or not
      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += quantity;
        cart.items[itemIndex] = productItem;
      } else {
        cart.items.push({ productId, name, quantity, price });
      }

      cart.bill += quantity.price;
      cart = await cart.save();
      return res.status(201).send(cart);
    } else {
      //no cart exist, create one
      const newCart = await Cart.create({
        userId,
        items: [{ productId, name, quantity, price }],
        bill: quantity * price
      });

      return res.status(201).send(newCart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};

module.exports.update_cart_item = async (req, res) => {
  const userId = req.params.id;
  const productId = req.params.itemId;

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
      cart.save();
      return res.status(201).send(cart);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('something went worng!');
  }
};

module.exports.delete_cart_item = async (req, res) => {
  const userId = req.params.id;
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
    return res.status(201).send(cart);
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }
};
