import React from 'react';
import { Container, Header } from '../../styles/components/OrderStyle';
import OrderCard from '../OrderCard';
import { useSelector } from 'react-redux';

export default function Orders() {
  const orders = useSelector(state => state.order.orders);

  return (
    <Container>
      <Header>
        <h1>Your Orders</h1>
      </Header>
      {orders.map(order => {
        return (
          <OrderCard
            key={order._id}
            dateAdded={order.date_added}
            totalAmount={order.bill}
            status={order.status}
            items={order.items}
          />
        );
      })}
    </Container>
  );
}
