import React, { useState, useEffect } from 'react';
// import TopPage from './components/Top/TopPage';
import SignIn from './components/Register/Register';
//import styles from "./components/css/destyle.css";
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <AuthProvider>
    <div className="App">
      <div className="header">ヘッダー</div>
      {/* <TopPage /> */}
      <SignIn />
    </div>
    </AuthProvider>
  )
}

export default App;
