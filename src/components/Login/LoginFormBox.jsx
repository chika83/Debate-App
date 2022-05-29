import React from 'react';
import DefaultButton from './DefaultButton';
import DefaultForm from './DefaultForm';
import FormBool from './FormBool';

const Login = (props) => {
   //const { errors } = props;
  // console.log(errors.idError);
  return (
    <div className='login-form'>
      <div className='login-form-title'>
        <h1>LOGIN</h1>
      </div>
       <DefaultForm loginTitle={"ID:"} place={"id"} errors={"idError"}/>
       <DefaultForm loginTitle={"PASS:"} place={"pass"}  errors={"passError"}/>
       <FormBool isError={props.isError} />
      <div className='login-form-button'>
        <DefaultButton loginbutton={"default"} gologin={props.gologin} isBool={props.isbool}/>
      </div>
    </div>
  )
}

export default Login
