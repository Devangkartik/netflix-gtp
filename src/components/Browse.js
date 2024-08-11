import React  from 'react'
import Header from './Header'
import GtpSearch from './GtpSearch'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useAddPapularMovies from '../hooks/useAddPapularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGtpSearch = useSelector(store => store.gtp.showGtpSearchView);

  useNowPlayingMovies();
  useAddPapularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (

    <div className=''>
      <Header/>
    {
      showGtpSearch ? (
      <GtpSearch/>
      ):(
        <>
         <MainContainer/>
      <SecondaryContainer/>
        </>
      )
    }  
    </div>
  )
}

export default Browse