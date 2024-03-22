import React, { useState } from 'react';
import firebase from './firebase';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={login}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;