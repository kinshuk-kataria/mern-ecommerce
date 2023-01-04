const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: String,
    ref: 'user'
  },
  items: [
    {
      productId: {
        type: String,
        ref: 'item'
      },
      title: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity cannot be less than 1'],
        default: 1
      },
      price: {
        type: Number
      },
      img: {
        type: String
      }
    }
  ],
  bill: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = Cart = mongoose.model('cart', CartSchema);
