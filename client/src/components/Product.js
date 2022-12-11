import React from 'react';
import {
  Card,
  Header,
  Footer,
  Container,
  AddItem
} from '../styles/components/ProductStyle';

function Product() {
  return (
    <Card>
      <Container>
        <Header>
          <img
            src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433577/item/goods_09_433577.jpg?width=1008&impolicy=quality_75"
            alt="jacket"
          ></img>
        </Header>
        <Footer>
          <h2>Denim Jacket</h2>
          <h3>$300</h3>
          <AddItem>
            <button>Add to cart</button>
          </AddItem>
        </Footer>
      </Container>
    </Card>
  );
}

export default Product;
