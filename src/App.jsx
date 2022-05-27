import React from 'react';
// import errorData from './error';
import './assets/styles/login.css';
// import LoginFormBox from './components/Login/LoginFormBox';
import CreateUser from './components/Register/CreateUser';

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       id:[],
//       pass:[],
//       myid:"myid",
//       mypass:"mypass",
//       error:errorData,
//       form:"xxx"
//     }
//     // this.gologin = this.gologin.bind(this)
//   }

  // loginBool = () => {
  //   const loginbool = this.state.form;

  //   this.setState({
  //     initForm
  //   })
  // }
  // componentDidMount() {
  //   this.initForm()
  // }

  // initError = () => {
  //   const initErrorSet = this.state.error[this.state.errorData];
  //   //const initError = "initerror";
  //   this.setState({
  //     error:initErrorSet
  //   })
  // }
  // componentDidMount() {
  //   this.initError()
  // }

//   render (){
//     return (
//       <div className='login-pare'>
//         <div className='login-main-box'>
//           <LoginFormBox errors={this.state.error} isError={this.state.myid} gologin={this.gologin} />
//         </div>
//       </div>
//     );
//  }
// render(){

// }
// }
function App() {
  return (
    <CreateUser />
  )
}

export default App;
