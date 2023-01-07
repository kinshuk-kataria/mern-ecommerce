import React from 'react';
import {
  Container,
  DeleteItem,
  Item,
  ItemDetails,
  QuantityContainer,
  Summary
} from '../../styles/components/CartStyle';
import { deleteCartItem, updateCart } from '../../features/cart/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate('');
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);
  const userId = userInfo?.id;

  const handleDeleteItem = data => {
    dispatch(deleteCartItem(data));
  };

  const handleUpdateCart = ({ userId, productId, qty }) => {
    dispatch(updateCart({ userId, productId, qty }));
  };

  const handleCheckout = () => {
    if (userId) {
      navigate('/checkout');
    } else {
      alert('Please Login first...');
    }
  };

  if (cart && cart.items.length > 0) {
    return (
      <Container>
        <h2>Cart</h2>
        {cart.items?.map(item => (
          <Item key={item._id}>
            {' '}
            <img src={item.img} alt="jacket"></img>
            <ItemDetails>
              <h3>{item.title}</h3>
              <p>Price:${item?.price}</p>
              <QuantityContainer>
                <label>Quantity:</label>
                <button
                  onClick={() =>
                    handleUpdateCart({
                      userId,
                      productId: item.productId,
                      qty: item.quantity - 1
                    })
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item?.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateCart({
                      userId,
                      productId: item.productId,
                      qty: item.quantity + 1
                    })
                  }
                >
                  +
                </button>
              </QuantityContainer>
              <DeleteItem>
                <MdOutlineDeleteOutline
                  size={25}
                  onClick={() =>
                    handleDeleteItem({ productId: item.productId, userId })
                  }
                />
              </DeleteItem>
            </ItemDetails>
          </Item>
        ))}

        <Summary>
          <div>
            <strong>Total:</strong>
            <strong>{cart?.bill}$</strong>
          </div>
          <button onClick={handleCheckout}>Proceed to checkout</button>
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
