import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Login from './pages/login';
import SignUp from './pages/sign-up';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './features/product/productActions';
import { getUserDetails } from './features/auth/authActions';
import Orders from './pages/order';
import Checkout from './pages/checkout';
import { getOrders } from './features/order/orderActions';

import Layout from './pages/layout';

function App() {
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

  let { userToken } = user;
  const userId = user?.userInfo?.id;

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }
    if (userId) {
      dispatch(getOrders(userId));
    }
  }, [userToken, userId, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
