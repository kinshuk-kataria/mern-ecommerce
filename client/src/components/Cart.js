import React from 'react';
import {
  Container,
  Item,
  ItemDetails,
  QuantityContainer,
  Summary
} from '../styles/components/CartStyle';
import { getCart } from '../features/cart/cartActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(':639b404be0b8d4e43dc117cf'));
  }, []);

  if (cart) {
    return (
      <Container>
        <h2>Cart</h2>
        {cart?.items?.map(item => (
          <Item>
            {' '}
            <img
              src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/433577/item/goods_09_433577.jpg?width=1008&impolicy=quality_75"
              alt="jacket"
            ></img>
            <ItemDetails>
              <h3>{item?.name}</h3>
              <p>Price:${item?.price}</p>
              <QuantityContainer>
                <label>Quantity:</label>
                <button>-</button>
                <span>{item?.quantity}</span>
                <button>+</button>
              </QuantityContainer>
            </ItemDetails>
          </Item>
        ))}

        <Summary>
          <div>
            <strong>Total:</strong>
            <strong>{cart?.bill}$</strong>
          </div>
          <button>Proceed to checkout</button>
        </Summary>
      </Container>
    );
  } else {
    return (
      <Container>
        <h3>Cart is Empty</h3>
      </Container>
    );
  }
}

export default Cart;
