import React from 'react';
import LoginId from './LoginId';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <div className='login-form-title'>
        <h1>LOGIN</h1>
      </div>
      <div className='login-form-flex'>
        <p>ID:</p>
        <input type="text" />
      </div>
      <div className='login-form-flex'>
        <p>PASS:</p>
        <input type="text" />
      </div>
      <div className='login-form-button'>
        <LoginId />
      </div>
    </div>
  )
}

export default LoginForm
