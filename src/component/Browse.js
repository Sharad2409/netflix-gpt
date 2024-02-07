import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'

function Browse() {
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
    
  )
}

export default Browse