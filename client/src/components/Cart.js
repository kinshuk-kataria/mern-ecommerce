import React from 'react';
import {
  Container,
  Item,
  ItemDetails,
  QuantityContainer,
  Summary
} from '../styles/components/CartStyle';

function Cart() {
  return (
    <Container>
      <h2>Cart</h2>
      <Item>
        {' '}
        <img
          src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433577/item/goods_09_433577.jpg?width=1008&impolicy=quality_75"
          alt="jacket"
        ></img>
        <ItemDetails>
          <h3>Jacket Armani</h3>
          <p>Price:$3000</p>
          <QuantityContainer>
            <label>Quantity:</label>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </QuantityContainer>
        </ItemDetails>
      </Item>
      <Summary>
        <div>
          <strong>Total:</strong>
          <strong>1300$</strong>
        </div>
        <button>Proceed to checkout</button>
      </Summary>
    </Container>
  );
}

export default Cart;
