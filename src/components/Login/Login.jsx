// import DefaultButton from './DefaultButton';
// import DefaultForm from './DefaultForm';
// import FormBool from './FormBool';
import  { Link}   from 'react-router-dom';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { LoginOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link2 from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Navigate } from 'react-router-dom';

//const { user } = useAuthContext();
//const theme = createTheme();
//let [ email, setEmail] = useState('');
//let [ pass, setPass] = useState('');
// const navigate = useNavigate();
const Login = (props) => {
   const handleSubmit = (event) => {
     event.preventDefault();
     const { email, password} = event.target.elements;
    //  auth.createUserWithEmailAndPassword(email,password);
     auth.signInWithEmailAndPassword(email,password)
     .then(console.log("login"));
    //  navigate("/home");
    // if (!user) {
    //   return <Navigate to="/login" />;
    // }
   };

//    const ChangeEmail = (event) => {
//     setEmail(event.currentTarget.value);
//   };
// const ChangePass = (event) => {
//     setPass(event.currentTarget.value);
//   }
  return (
    // <div className='login-form'>
    //   <div className='login-form-title'>
    //     <h1>LOGIN</h1>
    //   </div>
    //    <DefaultForm loginTitle={"ID:"} place={"id"} errors={"idError"}/>
    //    <DefaultForm loginTitle={"PASS:"} place={"pass"}  errors={"passError"}/>
    //    <FormBool isError={props.isError} />
    //   <div className='login-form-button'>
    //     <DefaultButton loginbutton={"default"} gologin={props.gologin} isBool={props.isbool}/>
    //   </div>
    // </div>
    // <ThemeProvider >
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div>
            {/* <form action="" onSubmit={handleSubmit}> */}
              <div>
                {/* <label htmlFor="">Eail-address</label> */}
                {/* <input type="email" name='email' placeholder='email'/> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  //  onChange={(event) => ChangeEmail(event)}
                />
              </div>
              <div>
                {/* <label htmlFor="">Password</label> */}
                {/* <input type="password" name='password' placeholder='password'/> */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  //  onChange={(event) => ChangePass(event)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >Login</Button>
                <Grid container>
                  <Grid item xs>
                    <Link to={"#"} >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={"#"} >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </div>
              <div>
                <p>
                  <Link to={"/register"} >新規登録はこちら</Link>
                </p>
              </div>
            {/* </form> */}
          </div>
          </Box>
        </Box>
      </Container>
    // {/* </ThemeProvider> */}
  )
}

export default Login;
