import React, { useState, useEffect } from 'react';
import TopPage from './components/Top/TopPage';
// import CleanUP from './components/Top/CleanUP';
import styles from "./components/css/destyle.css";

function App() {
  // const [status, setStatus] = useState("test");
  // const [input, setInput] = useState("");
  // const [counter, setCounter] = useState(0);
  // const [display, setDisplay] = useState(true);

  // const onChangeHandler = (e) => {
  //   setInput(e.target.value)
  // }

  useEffect(() => {
    // console.log("useEffect in App invoked !");
    // document.title = `current value is ${counter}`;
  }, []);

  return (
    // <div className="App">
    //   <h1 className="test">{status}</h1>
    //   <button onClick={() => setStatus("new text")}>new textに変換</button>
    //   <h2 className="input">{input}</h2>
    //   <input type="text" value={input} onChange={onChangeHandler} />
    //   <h3 className="counter">{counter}</h3>
    //   <button onClick={() => setCounter((preCounter) => preCounter + 1)}>+</button>
    //   {display && <CleanUP/>}
    //   <button onClick={() => setDisplay(!display)}>displayスイッチ</button>
    //   {console.log(display)}
    // </div>
    <div className="App">
      <div className="header">ヘッダー</div>
      <TopPage />
    </div>

  )
}

export default App;
