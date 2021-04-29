import { Router, Route, Routes } from 'react-router-dom'

import NavBar from './../../components/Layout/StartNavBar'
import WelcomePage from './Welcome/WelcomePage'
import MoviesPage from './../Movies/MoviesPage'
import BestMoviesPage from '../Movies/MoviesPages/BestMoviesPage'
import StripePage from './../Stripe/StripePage'
import ContactPage from './../ContactPage'
import NotFoundPage from './../NotFoundPage'

const StartApp = () => {
    return (
        <div>

            <Router>
                <NavBar>
                    <Routes>
                        <Route path='/welcome' element={<WelcomePage />} />
                        <Route path='/movies' element={<MoviesPage />} />
                        <Route path='/bestMovies' element={<BestMoviesPage />} />
                        <Route path='/stripe' element={<StripePage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </NavBar>
            </Router>

            <WelcomePage />

        </div>
    )
}

export default StartApp
 