const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  _id: {
    type: String
  },
  userId: {
    type: String
  },
  items: [
    {
      productId: {
        type: String
      },
      title: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
      },
      price: Number,
      img: String
    }
  ],
  bill: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);
