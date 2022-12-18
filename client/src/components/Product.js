import React from 'react';
import {
  Card,
  Header,
  Footer,
  Container,
  AddItem
} from '../styles/components/ProductStyle';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartActions';

function Product({ imgUrl, title, price, productId, userId }) {
  const dispatch = useDispatch();
  const quantity = 1;
  const data = { userId, productId, quantity };

  const handleAddToCart = data => {
    dispatch(addToCart(data));
    alert('item added to cart');
  };

  return (
    <Card>
      <Container>
        <Header>
          <img src={imgUrl} alt="jacket"></img>
        </Header>
        <Footer>
          <h2>{title}</h2>
          <h3>${price}</h3>
          <AddItem>
            <button onClick={() => handleAddToCart(data)}>Add to cart</button>
          </AddItem>
        </Footer>
      </Container>
    </Card>
  );
}

export default Product;
