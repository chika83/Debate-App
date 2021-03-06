import  { Link}   from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate,Navigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

   const handleSubmit = async (event) => {
     event.preventDefault();
     const { email, password} = event.target.elements;
     try{
       await auth.signInWithEmailAndPassword(email.value,password.value)
       .then(console.log(email.value,password.value));
       navigate("/");
     }catch(error){
       setError(error.message);
     }
    // if (!user) {
    //   return <Navigate to="/login" />;
    // }
   };

    return (
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Typography component="h1" variant="h5">
        LOGIN
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div>
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </div>
              <div>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
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
                  <Link to={"/register"} >????????????????????????</Link>
                </p>
              </div>
          </div>
          </Box>
        </Box>
      </Container>
  );
};

export default Login;
