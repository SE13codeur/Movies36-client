import React, { useState } from 'react'
import '../../../styles/SignIn.css'

import Cinema  from '../../../assets/images/signIn.jpg'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '81vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?cinema)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(7, 14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(),
  },
  forgot: {
    color: 'black',
  }
}))

const SignIn = () => {

  const classes = useStyles()

  // STATES   
  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signInErrors, setSignInErrors] = useState([])
  const setUserExists = useState(false)
  
  // SIGN IN ON CLICK
  const handleSignIn = async () => {
    async function signIn(username) {
      setUserExists({ username })
      setSignInErrors([])

      const response = await fetch('/signIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${signInEmail}&password=${signInPassword}`
      })

      const jsonResponse = await response.json()
      if (jsonResponse.result === true) {
        setUserExists(true)
      } else {
        setSignInErrors(jsonResponse.errors)
      }
    }
    signIn()
  }
        
// MAIN RETURN
  return (
    <Grid container component="main" className={classes.root}>
      
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        style={{ backgroundImage: `url(${Cinema})`}}
        item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <form className={classes.form} noValidate>
            {signInErrors}
            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setSignInEmail(e.target.value)}
              value={signInEmail}
            />

            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setSignInPassword(e.target.value)}
              value={signInPassword}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="transparent"
              className="signIn-btn"
              onClick={() => handleSignIn()}
            >
              SIGN IN
            </Button>

            <Grid container className={classes.forgot}>
              <Grid item xs>
                <Link href="/email" variant="body1">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signUp" variant="body1">
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>

    </Grid>
  )
}

export default SignIn