import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import MovieCard from '../../components/MovieCard'
import MovieForm from '../../components/MovieForm'

const Movie = () => {
  const { id } = useParams()
  const [room, setMovie] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await window.fetch(`/api/Movies/${id}`)
      const json = await data.json()
      // console.log(json)
      setMovie(json)
    }

    fetchData()
  }, [id])

  return room ? (
    <div>
      <MovieCard room={room} />
      <h2>Edit</h2>
      <MovieForm id={id} room={room} setMovie={setMovie} />
    </div>
  ) : null
}

export default Movie
