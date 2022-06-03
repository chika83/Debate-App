import SignIn from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Top/Home'
import TopPage from './components/Top/TopPage';
import ThreadPage from './components/Thread/ThreadPage';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HeaderBox from './components/Header/Header';
import styles from "./components/css/destyle.css";
//import React, { useState, useEffect } from 'react';
import NowLoading from './context/NowLoading';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
        {/* <HeaderBox /> */}
          <Routes>
            <Route path="/loading" element={<NowLoading />} />
            <Route exact path="/" element={<TopPage />} />
            <Route exact path="/thread" element={<ThreadPage />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}

export default App;
