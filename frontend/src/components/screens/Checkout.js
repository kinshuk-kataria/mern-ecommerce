import React from 'react';
import {
  CheckoutContainer,
  Payment,
  SubTotal,
  Total
} from '../../styles/components/CheckoutStyle';
import { useSelector, useDispatch } from 'react-redux';
import PaypalButtons from '../paypal/PaypalButtons';
import { createOrder } from '../../features/order/orderActions';
import axios from 'axios';

export default function Checkout() {
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);

  const PAYPAL_CLIENT_ID =
    'AaZdJWvvg4CUSKguxWmowOfjgW1VOHgiSSBd2FeixhX8YbFw1VRZwV8RYTFG9HAT8ULe4isdPY0b9aEQ';
  const cartId = cart.cart._id;
  const userId = auth.userInfo.id;

  const handleCreateOrder = async () => {
    const data = { cartId, userId };
    const response = await axios.post('/api/orders', data);
    const orderID = await response.data.id;
    return orderID;
  };

  const handleOnApprove = async (data, actions) => {
    const response = await axios.post(`/api/orders/${data.orderID}/capture`);
    return response;
  };

  return (
    <CheckoutContainer>
      <h1>Order Summary</h1>
      <SubTotal>
        <div>
          <h4>Items</h4>
          <p>${cart?.cart?.bill}</p>
        </div>
      </SubTotal>
      <Total>
        <h2>Order Total</h2>
        <p>${cart?.cart?.bill}</p>
      </Total>
      <Payment>
        <p>Choose below payment methods</p>
        <PaypalButtons
          PAYPAL_CLIENT_ID={PAYPAL_CLIENT_ID}
          handleCreateOrder={handleCreateOrder}
          handleOnApprove={handleOnApprove}
        />
      </Payment>
    </CheckoutContainer>
  );
}
