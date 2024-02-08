import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

function Browse() {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()

  return (
    <>
      <Header />
      {
        showGptSearch ? <GptSearch /> : <> <MainContainer /> <SecondaryContainer /></>
      }
      </>
  )
}

export default Browse