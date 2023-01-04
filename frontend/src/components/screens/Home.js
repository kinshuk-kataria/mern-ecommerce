import React from 'react';
import Product from '../Product';
import { Row } from '../../styles/components/HomeStyle';

import { useSelector } from 'react-redux';

function Home() {
  const { items } = useSelector(state => state.products);
  const { userInfo } = useSelector(state => state.auth);

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
            userId={userInfo?._id}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
