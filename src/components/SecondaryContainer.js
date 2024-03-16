import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  // console.log(movies);
  return (
 ( movies.nowPlayingMovies &&  <div className='-mt-48 relative z-30'>
    <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/> 
    <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies}/> 
    <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies}/> 
    <MovieList title={"Top 20🌟 Movies"} movies={movies.nowPlayingMovies}/> 
    </div> )
  )
}

export default SecondaryContainer