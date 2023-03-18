import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  text-align: center;
  padding: 2rem;
  h1 {
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    width: 50%;
    margin: 0 auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;

export const SubTotal = styled.div`
  border-bottom: 1px solid black;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-top: 3rem;
`;

export const Payment = styled.div`
  padding: 4rem 0;
  text-align: left;
  p {
    padding: 10px 0;
  }
`;
export const RazorPayButton = styled.div`
  button {
    width: 100%;
    padding: 18px;
    margin: 14px 0;
  }
`;
