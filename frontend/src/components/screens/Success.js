import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SuccessContainer } from '../../styles/components/SuccessStyle';
import OrderCard from '../OrderCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const [successOrder, setSuccessOrder] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const orderId = location?.state?.order_id;

  const getSuccessOrder = async orderId => {
    const { data } = await axios.get(`/api/success/${orderId}`);

    setSuccessOrder(data);
  };
  const handleRedirect = () => {
    navigate('/');
  };

  useEffect(() => {
    getSuccessOrder(orderId);
  }, []);

  return (
    <SuccessContainer>
      <h2>Thanks for ordering, your order has been completed!</h2>
      <OrderCard
        dateAdded={successOrder?.date_added}
        totalAmount={successOrder?.bill}
        status={successOrder?.status}
        items={successOrder?.items}
      />
      <button onClick={handleRedirect}>Continue shopping</button>
    </SuccessContainer>
  );
}
