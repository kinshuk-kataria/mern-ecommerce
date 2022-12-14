import React from 'react';
import { Container, Form } from '../styles/components/LoginStyle';

import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  console.log(formData);

  const handleInputChange = e => {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = () => {};

  return (
    <Container>
      <h2>CREATE A PROFILE</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleInputChange} />
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" required onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleInputChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          onChange={handleInputChange}
        />
        <button type="submit">CREATE MY PROFILE</button>
      </Form>
    </Container>
  );
}

export default SignUp;
