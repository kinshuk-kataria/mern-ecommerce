import React, { useEffect } from 'react';
import Product from '../Product';
import { Row } from '../../styles/components/HomeStyle';
import { getCart } from '../../features/cart/cartActions';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const { items } = useSelector(state => state.products);
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const userId = userInfo?.id;

  useEffect(() => {
    dispatch(getCart(userId));
  }, [userId, dispatch]);

  return (
    <div>
      <Row>
        {items.map(item => (
          <Product
            key={item._id}
            imgUrl={item.img}
            title={item.title}
            price={item.price}
            productId={item._id}
            userId={userInfo?.id}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
