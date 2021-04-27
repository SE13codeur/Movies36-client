import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Movie from '../../components/Movies/Movie'
import Movies from '../../components/Movies/Movies'

const MoviesPage = () => {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<Movies />} />
                <Route path=':id' element={<Movie />} />
            </Routes>
            
        </div>
    )
}

export default MoviesPage