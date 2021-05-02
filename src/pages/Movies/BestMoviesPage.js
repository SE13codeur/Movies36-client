import React, { useState } from 'react'

import Button from '@material-ui/core/Button'

const BestMoviesPage = () => {

    const [topMovie, setTopMovie] = useState('My best current movie is :')

    const handleSelect = movie => {
        const bestMovie = async () => {
            const data = await fetch('/.netlify/functions/bestMovie')
            const json = await data.json()
            const topMovie = json.movieName
        }

        setTopMovie(topMovie)
    }

    return (
        <div>
            
            <h1>{topMovie}</h1>

            <Button onClick={(movie) => handleSelect(movie)}>
                TopMovie
            </Button>
            
        </div>
  )
}

export default BestMoviesPage