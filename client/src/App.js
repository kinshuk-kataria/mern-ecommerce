import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useEffect } from 'react';

function App() {
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
