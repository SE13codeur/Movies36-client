import React from 'react'

import { ThemeProvider } from '@material-ui/styles'



import StartPage from '../pages/Welcome/StartPage'
import WelcomePage from '../pages/Welcome/WelcomePage'


const App = () =>
  
    <div>
    {/* If connected == false => SignBar with <SignIn /> || <SignUp />
        If connected => redirect <WelcomePage />  */}  
    
      {/*=> LogOut*/}
        <StartPage />
        


      {/*=> LogIn
      <WelcomePage />*/}
      
    </div>
 

export default App