import React from 'react'
import Navigation from '../../components/Layout/LogIn/Navigation'

const WelcomePage = () => {
    return (
        <Router>
      
            <Navigation>
                <Switch>
                    <Route path='/' element={<WelcomePage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/bestMovies' element={<BestMoviesPage />} />
                    <Route path='/stripe' element={<StripePage />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Switch>
            </Navigation>
    
    </Router>
    )
}

export default WelcomePage