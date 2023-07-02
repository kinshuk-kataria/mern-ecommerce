const fetch = require('node-fetch');

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const APP_SECRET = process.env.PAYPAL_SECRET_KEY;

const base = 'https://api-m.sandbox.paypal.com';

async function createOrder(amountValue) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: `${amountValue}`
          }
        }
      ]
    })
  });

  return handleResponse(response);
}
async function capturePayment(orderID) {
  const accessToken = await generateAccessToken();

  const url = `${base}/v2/checkout/orders/${orderID}/capture`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  return data;
}

async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ':' + APP_SECRET).toString('base64');
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'post',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  const jsonData = await handleResponse(response);

  return jsonData.access_token;
}

async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}

module.exports = { createOrder, capturePayment };
