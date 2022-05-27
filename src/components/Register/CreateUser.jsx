// firebase v9 auth, SignUp sample
import React from 'react';
import { useState } from 'react';
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const CreateUser = () => {
  const [ email, setEmail] = useState('');
  const [ pass, setPass] = useState('');
  // const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, pass} = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value ,pass.value);
  }
  const ChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const ChangePass = (event) => {
    setPass(event.currentTarget.value);
  }

  return (
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input name="email"
                 type="email"
                 placeholder="email"
                 onChange={(event) => ChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password"
                 type="password"
                 onChange={(event) => ChangePass(event)} />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser;
