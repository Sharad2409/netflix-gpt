import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
  const movies = useSelector(store=> store.movies)
  console.log(movies.popularMovies)
  return (
    <div className='bg-black'>
      <div className='-mt-28 relative z-10'>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Trending"} movies={movies.trendingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer