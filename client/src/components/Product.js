import React from 'react';
import {
  Card,
  Header,
  Footer,
  Container,
  AddItem
} from '../styles/components/ProductStyle';

function Product({ imgUrl, title, price }) {
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
            <button>Add to cart</button>
          </AddItem>
        </Footer>
      </Container>
    </Card>
  );
}

export default Product;
