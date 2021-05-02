import React, {useState} from 'react'
import '../../../styles/SignUp.css'

// Modules: useForm ?

// MUI Core
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Alert, AlertTitle } from '@material-ui/lab';


const SignUp = (props) => {
  
  // STATES
  const [userExists, setUserExists] = useState(false)

  const signUpUsername = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpErrors, setSignUpErrors] = useState([])

  // SIGN-UP ON CLICK
  var handleSignUp = async () => {
    async function signUp() {
      setSignUpErrors([]);
      const response = await fetch('/signUp', {
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
      });
      const jsonResponse = await response.json();
      if(jsonResponse.result === true){
        setUserExists(true);
        props.addToken(jsonResponse.userSaved.token) // Ajout du token dans redux
      } else {
        setSignUpErrors(jsonResponse.errors)
      }
    }
    signUp()
  }

  // ERROR MESSAGES FOR SIGNUP
  var signUpErrorAlert = signUpErrors.map((error,i) => {
      return (
          <Alert onClose={() => {}}severity="error">
          <AlertTitle>ERROR</AlertTitle>
              Be careful to your<strong>signUp!</strong>
          </Alert>
      )
  })

  // MAIN RETURN
  return (
    <Container className="signUp-container" maxWidth="xs">
      
      <form onSubmit={handleSignUp}>
        {signUpErrorAlert}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  value={signUpEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  value={signUpPassword}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" fullWidth type="submit" variant="contained">
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </form>

    </Container>
  )
}

export default SignUp


  // REDIRECT IF USER IS LOGGED-IN OR SIGNED-UP
  // if(userExists){
  //     return(
  //       <Redirect to='/welcomeMovies' />
  //     )
  // };


  


