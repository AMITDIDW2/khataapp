import React from 'react';
import RegistrationForm from '.components/registrationForm';
import LoginForm from './components/loginForm';

function App() {
  return (
    <div>
      <h1>Register</h1>
      <RegistrationForm />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default App;