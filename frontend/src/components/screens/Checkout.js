import React from 'react';
import {
  CheckoutContainer,
  Payment,
  SubTotal,
  Total
} from '../../styles/components/CheckoutStyle';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Checkout() {
  const [sdkReady, setSdkReady] = useState(false);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get('checkout');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.appendChild(script);
    };
  }, []);

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
        <h4>Choose payment method below:</h4>
        <button>Payment</button>
      </Payment>
    </CheckoutContainer>
  );
}
