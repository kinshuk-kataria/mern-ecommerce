import React from 'react';
import { Card, CardHeader, CardMain } from '../styles/components/OrderStyle';

const Item = ({ imgUrl, title, price }) => {
  return (
    <CardMain>
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
      <h5>Price: {price}</h5>
    </CardMain>
  );
};

function OrderCard({ dateAdded, totalAmount, status, items }) {
  return (
    <Card>
      <CardHeader>
        <p>Order Placed: {dateAdded}</p>
        <p>Total: {totalAmount}</p>
        <p>Order Status: {status}</p>
      </CardHeader>

      {items?.map(item => (
        <Item imgUrl={item.img} title={item.title} price={item.price} />
      ))}
    </Card>
  );
}

export default OrderCard;
