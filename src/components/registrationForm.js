import React, { useState } from 'react';
import firebase from './firebase';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const register = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Save the rest of the data to the database
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={register}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <input type="tel" placeholder="Mobile Number" value={mobile} onChange={e => setMobile(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;