import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Cart from './components/screens/Cart';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import { useEffect } from 'react';
import { getCart } from './features/cart/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './features/product/productActions';
import { getUserDetails } from './features/auth/authActions';

function App() {
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch();

  let { userToken } = user;
  const userId = user?.userInfo?.id;

  useEffect(() => {
    if (userToken) {
      dispatch(getUserDetails());
    }

    dispatch(getCart(userId));
  }, [userToken, userId, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/create" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
