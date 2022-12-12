import React from 'react';
import Product from './Product';
import { Row } from '../styles/components/HomeStyle';

function Home() {
  return (
    <div>
      <Row>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Row>
    </div>
  );
}

export default Home;
