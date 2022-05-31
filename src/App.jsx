//import React, { useState, useEffect } from 'react';
import TopPage from './components/Top/TopPage';
import SignIn from './components/Register/Register';
//import styles from "./components/css/destyle.css";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import HeaderBox from './components/Header/Header';

function App() {

  return (
    <AuthProvider>

      <div className="App">
        <BrowserRouter>
        <HeaderBox />
          <Routes>
            <Route exact path="/" element={<TopPage />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App;
