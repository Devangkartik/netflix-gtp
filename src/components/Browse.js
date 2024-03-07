import React ,{useEffect} from 'react'
import Header from './Header'
import {useNowPlayingMovies} from '../hooks/useNowPlayingMovies'


const Browse = () => {
     useNowPlayingMovies()

  return (

    <div className=''>
      <Header/>
    </div>
  )
}

export default Browse