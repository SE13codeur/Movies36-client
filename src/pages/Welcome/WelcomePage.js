import React from 'react'
import NavBar from '../../components/Layout/NavBar'

const WelcomePage = () => {
    return (
        <Router>
      
            <NavBar>
                <Switch>
                    <Route path='/' element={<StartPage />} />
                    <Route path='/movies' element={<MoviesPage />} />
                    <Route path='/bestMovies' element={<BestMoviesPage />} />
                    <Route path='/stripe' element={<StripePage />} />
                    <Route path='/comments' element={<CommentsPage />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                </Switch>
            </NavBar>
    
    </Router>
    )
}

export default WelcomePage