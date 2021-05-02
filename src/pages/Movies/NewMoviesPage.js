import React, { useState } from 'react'

import Button from '@material-ui/core/Button'

const NewMoviesPage = () => {

    const [newMovie, setNewMovie] = useState('New movies this week ... ')

    const handleClick = movie => {
        const NewMovies = async () => {
            const data = await fetch('/.netlify/functions/api/newMovies')
            const json = await data.json()
            const newMovie = json.movieName
        }
{/* <Route path='/' element={<NewMoviesPage />} />

            <Route path=':id' element={<Movie />} /> */}
        setNewMovie(newMovie)
    }

    return (
        <div>
            
            <h1>{newMovie}</h1>

            <Button onClick={handleClick()}>
                TopMovie
            </Button>
            
        </div>
  )
}

export default NewMoviesPage


