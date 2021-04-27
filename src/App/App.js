import React from 'react'

import { ThemeProvider } from '@material-ui/styles'

import theme from '../styles/theme'


import StartPage from '../pages/Welcome/StartPage'
import WelcomePage from '../pages/Welcome/WelcomePage'


const App = () =>
  
    <div>
      
      {/* if LogOut =>
      <StartPage />*/}

      {/* if LogIn =>*/}
      <WelcomePage />
    </div>
 

export default App