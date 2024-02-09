import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    if(!movies) return
    const mainMovie = movies[6];
    const {title, overview, id} = mainMovie
    return (
        <div className='relative overflow-hidden max-md:pt-40 max-md:bg-black'>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer