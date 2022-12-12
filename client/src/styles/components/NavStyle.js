import styled from 'styled-components';

export const Nav = styled.div`
  padding: 0.5rem;
  color: white;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Logo = styled.h1``;

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.div`
  text-align: center;
  margin: 0 1.5rem;
  color: gray;
  cursor: pointer;
  p {
    position: absolute;
    top: 0;
    right: 2.3rem;
    background: red;
    border-radius: 50%;
    width: 18px;
    color: white;
  }
`;
