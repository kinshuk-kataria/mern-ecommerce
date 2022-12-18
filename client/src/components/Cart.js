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
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(userInfo?._id));
  }, []);
  if (cart) {
    return (
      <Container>
        <h2>Cart</h2>
        {cart.items?.map(item => (
          <Item key={cart._id}>
            {' '}
            <img src={item.img} alt="jacket"></img>
            <ItemDetails>
              <h3>{item.title}</h3>
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
