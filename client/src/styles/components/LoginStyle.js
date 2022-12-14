import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;
  h2 {
    text-align: center;
  }
  a {
    color: inherit;
    margin: 15px 0;
  }

  @media (min-width: 576px) {
    width: 60%;
    border: 1px solid black;
    margin: 12px auto;
    border-radius: 4px;
  }
  @media (min-width: 992px) {
    width: 35%;
  }
`;

export const Form = styled.form`
  margin-top: 30px;

  input {
    padding: 18px 3px;
    width: 100%;
    margin: 15px 0;
    outline: none;
  }
  button {
    margin: 30px 0;
    padding: 23px;
    width: 100%;
    background-color: #212121;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
  }
`;
