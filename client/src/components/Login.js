import React from 'react';
import { Container, Form } from '../styles/components/LoginStyle';

export default function Login() {
  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" required />
        <button type="submit">Login</button>
      </Form>
      <a href="/create">Create a profile</a>
    </Container>
  );
}
