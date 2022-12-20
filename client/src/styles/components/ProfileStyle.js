import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;

  button {
    float: right;
    padding: 5px;
    cursor: pointer;
    background-color: black;
    border: none;
    color: white;
    border-radius: 3px;
    &:hover {
      background: red;
    }
  }

  section {
    margin: 1rem 0;
    padding: 0.8rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
  @media (min-width: 576px) {
    width: 50%;
    margin: 22px auto;
    border: 1px solid black;
  }
`;
