var crypto = require('crypto');

module.exports.validatePaymentVerification = (
  orderDetails,
  razorpay_signature,
  secret
) => {
  let body = orderDetails.order_id + '|' + orderDetails.payment_id;

  let expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature == razorpay_signature) {
    return {
      isValid: true
    };
  } else {
    return {
      isValid: false
    };
  }
};
