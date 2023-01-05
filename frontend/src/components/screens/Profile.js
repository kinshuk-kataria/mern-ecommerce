import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import { Container } from '../../styles/components/ProfileStyle';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

export default function Profile() {
  const { userInfo } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {!userInfo ? (
        <Login />
      ) : (
        <Container>
          <h2>Profile Details</h2>
          <section>
            <h4>Name</h4>
            <p>{userInfo.name}</p>
          </section>
          <section>
            <h4>Email</h4>
            <p>{userInfo.email}</p>
          </section>
          <button onClick={handleLogout}>Log-Out</button>
        </Container>
      )}
    </div>
  );
}
