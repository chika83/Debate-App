import React from 'react';

const DefaultForm = (props) => {
    return(
      <div className='login-form-flex'>
        <p>{props.loginTitle}</p>
        <input type="text" />
        <p>{props.errors}</p>
      </div>
    )
}

export default DefaultForm
