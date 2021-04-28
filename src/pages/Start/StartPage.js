import React from 'react'
import WelcomePage from './Welcome/WelcomePage'

const StartApp = () => {
    return (
        <div>

            <Router>
                <NavBar>
                    <Switch>
                        <Route path='/welcome' element={<WelcomePage />} />
                        <Route path='/movies' element={<MoviesPage />} />
                        <Route path='/bestMovies' element={<BestMoviesPage />} />
                        <Route path='/stripe' element={<StripePage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='*' element={<NotFound />} />
                    </Switch>
                </NavBar>
            </Router>

            <WelcomePage />

        </div>
    )
}

export default StartApp
 