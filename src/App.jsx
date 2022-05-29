import React, { useState, useEffect } from 'react';
import TopPage from './components/Top/TopPage';
import styles from "./components/css/destyle.css";

function App() {

  return (
    <div className="App">
      <div className="header">ヘッダー</div>
      <TopPage />
    </div>
  )
}

export default App;
