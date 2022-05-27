import React from 'react';

const FormBool = (props) => {
  const isError = (props.form === props.myAcount);
  console.log(props.isError)
  const errorClass = isError ? 'folse' :  'loginerror';

  return (
    <>
      <p>{errorClass}</p>
    </>
  )
}

export default FormBool
