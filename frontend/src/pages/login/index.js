import React from 'react';
import { Container, Form } from '../../styles/components/LoginStyle';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userLogin } from '../../features/auth/authActions';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

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
    dispatch(userLogin(formData));
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" onChange={handleInputChange} required />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </Form>
      <a href="/create">Create a profile</a>
    </Container>
  );
}
