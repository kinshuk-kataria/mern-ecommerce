import React, { useState } from 'react';
import Login from './Login';
export default function Profile() {
  const [loggedIn, setLoggedIn] = useState('false');

  return <div>{loggedIn ? <Login /> : <div>heeyeyey</div>}</div>;
}
