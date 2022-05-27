//import Stack from '@mui/material/Stack';
import React from 'react'
import Button from '@mui/material/Button';

const DefaultButton = (props) => {
  return (
    <Button variant="outlined" onClick={() => props.gologin(props.isBool)}></Button>
  )
}
export default DefaultButton
