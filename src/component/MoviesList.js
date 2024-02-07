import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title, movies}) => {
  return (
    <div className='px-6 overflow-hidden'>
        <h2 className='text-left py-6 text-2xl font-bold text-white'>{title}</h2>
        <div className='flex overflow-x-auto'>
            <div className='flex'>
                {
                    movies?.map(movie => {
                        return <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default MoviesList