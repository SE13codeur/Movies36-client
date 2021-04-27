import React from 'react'

import { ThemeProvider } from '@material-ui/styles';

import theme from '../styles/theme';
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Welcome/WelcomePage'
import RoomsPage from '../pages/Movies/MoviesPage'
import About from '../pages/About'
import Contact from '../pages/Stripe/Stripe'
import NotFound from '../pages/NotFound'
import StartPage from '../pages/Welcome/StartPage';
import WelcomePage from '../pages/Welcome/WelcomePage';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
      {/* if LogOut =>
      <StartPage />*/}

      {/* if LogIn =>*/}
      <WelcomePage />
      

      

    </ThemeProvider>
  )
}

export default App