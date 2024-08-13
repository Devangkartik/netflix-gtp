import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  
  return (
 ( movies.nowPlayingMovies, movies.itsPapularMovies , movies.trandingMovies , movies.upcomingMovies &&  <div className='w-screen aspect-video  bg-black py-2 '>
    <div className='mt-0 pl-4 md:pl-12 md:-mt-56 relative pt-[80%] md:pt-[56%] z-20'>
    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/> 
    <MovieList title={"Popular Movies"} movies={movies.itsPapularMovies }/> 
    <MovieList title={"Trending Movies"} movies={movies.trandingMovies}/> 
    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/> 
    </div>
    </div> )
  )
}

export default SecondaryContainer