import React from 'react';
import errorData from './error';
import './assets/styles/login.css';
import LoginFormBox from './components/LoginFormBox';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:[],
      pass:[],
      sample:{smple:"sample表示",second:"2番目"},
      error:errorData,
      // initError:"入力してください",
      // idError:errorData[0],
      // passError:passError,
      form:""
    }
  }

  // initForm = () => {
  //   const initForm = this.state.form;

  //   this.setState({
  //     initForm
  //   })
  // }
  // componentDidMount() {
  //   this.initForm()
  // }
  initError = () => {
    const initErrorSet = this.state.error[this.state.initError];
    //const initError = "initerror";
    this.setState({
      error:initErrorSet
    })
  }
  componentDidMount() {
    this.initError()
  }

  render (){
    return (
      <div className='login-pare'>
        <div className='login-main-box'>
          <LoginFormBox errors={this.state.error}/>
        </div>
      </div>
    );
 }
}
