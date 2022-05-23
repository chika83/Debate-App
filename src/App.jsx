import React from 'react';
import errorData from './error';
import './assets/styles/login.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:[],
      pass:[],
      sample:"sample表示",
      error:errorData
    }
  }
  render (){
  return (
    <div className='login-pare'>
      <div className='login-main-box'>

      </div>
    </div>
  );
 }
}
