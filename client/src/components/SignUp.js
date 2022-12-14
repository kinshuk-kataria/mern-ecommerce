import React from 'react';
import { Container, Form } from '../styles/components/LoginStyle';
import { registerUser } from '../features/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function SignUp() {
  const dispatch = useDispatch();
  const { loading, userInfo, error } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {}, [userInfo]);

  const handleInputChange = e => {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      formData.email = formData.email.toLowerCase();

      const name = formData.name;
      const email = formData.email;
      const password = formData.password;

      const data = { name, email, password };

      dispatch(registerUser(data));
    } else {
      alert('Please enter correct password');
      return;
    }
  };

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
