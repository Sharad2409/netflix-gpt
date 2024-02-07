import React from 'react'
import { POSTER_IMG_PATH } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 pr-4'>
        <img src={POSTER_IMG_PATH + posterPath} alt='movie poster' />
    </div>
  )
}

export default MovieCard