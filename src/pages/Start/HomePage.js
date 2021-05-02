import React from 'react'

import { Router, Route, Routes } from 'react-router-dom'

import HomeNavBar from '../../components/Layout/HomeNavBar'

import WelcomeMoviesPage from '../Movies/WelcomeMoviesPage'
import NewMoviesPage from '../Movies/NewMoviesPage'
import BestMoviesPage from '../Movies/BestMoviesPage'
import HistoryPage from '../Stripe/HistoryPage'
import ContactPage from '../ContactPage'
import NotFoundPage from '../NotFoundPage'

const StartApp = () => {
    return (
        <Router>
            
            <HomeNavBar>
                <Routes>
                    <Route path='/welcomeMovies' element={<WelcomeMoviesPage />} />
                    <Route path='/newMovies' element={<NewMoviesPage />} />
                    <Route path='/bestMovies' element={<BestMoviesPage />} />
                    <Route path='/history' element={<HistoryPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </HomeNavBar>

        </Router>
    )
}

export default StartApp
 