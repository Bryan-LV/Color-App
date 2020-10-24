import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Signup(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h2>Signup </h2>
      <TextField id="standard-basic" label="Email" />
      <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button variant="contained" color="primary">Signup</Button>

      <div onClick={props.handleView}>
        <h2>Already have an account?</h2>
      </div>
    </form>
  )
}
