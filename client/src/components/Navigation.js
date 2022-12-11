import React from 'react';
import { Nav, Container, Item, Logo } from '../styles/components/NavStyle';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';

function Navigation() {
  return (
    <Nav>
      <Logo>Outfits</Logo>
      <Container>
        <Item>
          <CgProfile size={25} />
          <h4>Profile</h4>
        </Item>
        <Item>
          <p>2</p>
          <FiShoppingBag size={25} />

          <h4>Cart</h4>
        </Item>
      </Container>
    </Nav>
  );
}

export default Navigation;
