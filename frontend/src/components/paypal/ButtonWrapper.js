import { usePayPalScriptReducer, PayPalButtons } from '@paypal/react-paypal-js';

const ButtonWrapper = props => {
  const {
    style,
    currency,
    showSpinner,
    amount,
    handleCreateOrder,
    handleOnApprove
  } = props;
  const [{ options, isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={handleCreateOrder}
        onApprove={handleOnApprove}
      />
    </>
  );
};

export default ButtonWrapper;
