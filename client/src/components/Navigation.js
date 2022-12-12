import React from 'react';
import { Nav, Container, Item, Logo } from '../styles/components/NavStyle';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <Logo>Outfits</Logo>
      </Link>
      <Container>
        <Item>
          <Link to="profile">
            <CgProfile size={25} />
            <h4>Profile</h4>
          </Link>
        </Item>

        <Item>
          <Link to="cart">
            <p>2</p>
            <FiShoppingBag size={25} />
            <h4>Cart</h4>
          </Link>
        </Item>
      </Container>
    </Nav>
  );
}

export default Navigation;
