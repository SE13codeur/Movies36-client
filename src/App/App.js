import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Navigation'
import HomePage from '../pages/Welcome/WelcomePage'
import RoomsPage from '../pages/Movies/MoviesPage'
import About from '../pages/About'
import Contact from '../pages/Stripe/Stripe'
import NotFound from '../pages/NotFound'


const App = () => {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='rooms/*' element={<RoomsPage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </Layout>
  )
}

export default App