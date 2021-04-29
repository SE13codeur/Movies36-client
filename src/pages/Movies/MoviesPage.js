import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewMoviesPage from './MoviesPages/NewMoviesPage'
import BestMoviesPage from './MoviesPages/BestMoviesPage'

const MoviesPage = () => {
    return (
        <div>
            
            <h1>MoviesPage</h1>
            
            {/* <Routes>
                <Route path='/newMovies' element={<NewMoviesPage />} />
                <Route path='/bestMovies' element={<BestMoviesPage />} />
            </Routes> */}
            
        </div>
    )
}

export default MoviesPage