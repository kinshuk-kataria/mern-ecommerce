import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 12px;
  @media (min-width: 576px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    width: 60%;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  h1 {
    padding: 20px 0;
  }
`;

export const Card = styled.div`
  padding: 1.2rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 22px;
`;

export const CardHeader = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-between;
`;

export const CardMain = styled.div`
  padding: 22px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  img {
    max-width: 65px;
    max-height: 65px;
    margin-right: 15px;
  }
  justify-content: space-between;
  h5 {
    flex: 2;
    text-align: right;
  }
`;
