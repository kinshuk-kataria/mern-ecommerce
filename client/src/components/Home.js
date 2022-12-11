import React from 'react';
import Navigation from './Navigation';
import Product from './Product';
import { Row } from '../styles/components/HomeStyle';

function Home() {
  return (
    <div>
      <Navigation />
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
