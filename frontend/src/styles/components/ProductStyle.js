import styled from 'styled-components';

export const Card = styled.div`
  padding: 3rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  @media (min-width: 576px) {
    min-width: 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    min-width: 25%;
    max-width: 25%;
  }
`;
export const Container = styled.div``;

export const Header = styled.div`
  text-align: center;
  img {
    height: 350px;
    max-width: 100%;
    object-fit: cover;
    vertical-align: middle;
  }
`;

export const Footer = styled.div`
  h2 {
    font-size: 1.1rem;
    letter-spacing: 1px;
    text-align: center;
    padding: 8px;
  }
  h3 {
    font-size: 0.875rem;
    text-align: center;
  }
`;

export const AddItem = styled.div`
  margin-top: 10px;
  button {
    min-width: 100%;
    padding: 10px 10px;
    cursor: pointer;

    &:hover {
      background-color: #212121;
      color: white;
    }
  }
`;
