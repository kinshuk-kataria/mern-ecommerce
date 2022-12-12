import React from 'react';
import { Container, Form } from '../styles/components/LoginStyle';

function SignUp() {
  return (
    <Container>
      <h2>CREATE A PROFILE</h2>
      <Form>
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" required />
        <button type="submit">CREATE MY PROFILE</button>
      </Form>
    </Container>
  );
}

export default SignUp;
