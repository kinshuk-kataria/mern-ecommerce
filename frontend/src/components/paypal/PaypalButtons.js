import React from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import ButtonWrapper from './ButtonWrapper';

export default function PaypalButtons(props) {
  const { PAYPAL_CLIENT_ID, handleCreateOrder, handleOnApprove } = props;

  return (
    <div style={{ maxWidth: '750px', minHeight: '200px' }}>
      <PayPalScriptProvider
        options={{
          'client-id': 'test',
          'components': 'buttons',
          'currency': 'USD'
        }}
      >
        <ButtonWrapper
          PAYPAL_CLIENT_ID={PAYPAL_CLIENT_ID}
          amount={2}
          currency="USD"
          style={{ layout: 'vertical' }}
          showSpinner={false}
          handleCreateOrder={handleCreateOrder}
          handleOnApprove={handleOnApprove}
        />
      </PayPalScriptProvider>
    </div>
  );
}
