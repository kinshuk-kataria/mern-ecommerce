import styled from 'styled-components';

export const SuccessContainer = styled.div`
  padding: 1rem;
  h2 {
    padding-bottom: 2rem;
  }
  button {
    padding: 10px;
    background: black;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  @media (min-width: 576px) {
    width: 60%;
    margin: 0 auto;
  }
`;
