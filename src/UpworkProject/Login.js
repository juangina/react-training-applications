import { useNavigate, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { PrimaryButton, LoginTextField } from "./StyledComponents";
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import {useEffect, useState} from 'react';

export default function Login({loggedIn, setLoggedIn}) {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.state === null) {
      navigate('/')
    } else if(location.state.loggedIn === 'Yes') {
      navigate('/upwork/jobs', {state: {loggedIn: 'Yes'}});
    }
  })
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        sx={{
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 400
        }}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <LoginTextField
          required
          margin="normal"
          fullWidth
          id="email"
          label="Username or Email"
          name="email"
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon/>
              </InputAdornment>
            ),
          }}
          onChange={(e)=> {
            //console.log(e.target.value)
            setUserName(e.target.value)
          }}
        />
        <LoginTextField
          required
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <PrimaryButton 
          fullWidth
          variant="contained"
          color="success"
          onClick={(e)=>{
            if(userName === '') {
              alert('Please enter a username or email');
            } else {
              navigate('/upwork/jobs', {state: {loggedIn: 'Yes'}});
              setLoggedIn(true);
            }
            
          }}
          >
            Continue with Email
        </PrimaryButton>
      </Box>
    </Container>
  );
}