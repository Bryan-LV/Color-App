import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



export default function Login(props) {
  const classes = useStyles();
  const [user, setUser] = useState({email:'', password:''});
  
  const loginUser = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message
      console.log(errorMessage);
      // ...
    });
    

  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={loginUser}>
      <h2>Login </h2>
      <TextField id="standard-basic" label="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
        />
      <Button variant="contained" color="primary">Login</Button>
      <div onClick={props.handleView}>
        <h2>Don't have an account?</h2>
      </div>
    </form>
  )
}
