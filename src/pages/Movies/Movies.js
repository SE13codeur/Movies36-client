import React, { useState, useEffect } from 'react'
import MovieCard from '../../components/MovieCard'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await window.fetch('/api/movies')
      const json = await data.json()
      // console.log(json)
      setMovies(json)
    }

    fetchData()
  }, [])

  return (
    <>
      {movies.map(movie => (
        <Link key={movie._id} to={movie._id}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </>
  )
}

export default Movies