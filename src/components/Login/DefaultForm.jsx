import React from 'react';

const DefaultForm = (props) => {
    return(
      <div className='login-form-flex'>
        <p>{props.loginTitle}</p>
        <input type="text" placeholder={props.place}/>
      </div>
    )
}

export default DefaultForm
