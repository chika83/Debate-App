import React from 'react';
import DefaultButton from './LoginButton';
import  DefaultForm from './DefaultForm';

const LoginFormBox = (props) => {
   const { errors } = props;
  // console.log(errors.idError);
  return (
    <div className='login-form'>
      <div className='login-form-title'>
        <h1>LOGIN</h1>
      </div>
       <DefaultForm loginTitle={"ID:"} errors={"idError"}/>
       <DefaultForm loginTitle={"PASS:"} errors={"passError"}/>
       {/* {console.log(props.errors.idError)} */}
      <div className='login-form-button'>
        <DefaultButton loginbutton={"default"} />
      </div>
    </div>
  )
}

export default LoginFormBox
