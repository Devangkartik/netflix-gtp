import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GtpMovieSuggestion = () => {
  
  const {movieNames , movieResults}= useSelector((store) => store.gtp)

  if(!movieNames) return null

  return (
    <div className=' p-4 bg-opacity-90 text-white'> 
    {movieNames?.map((movieName,index) => (<MovieList 
    key={movieName} 
    title={movieName} 
    movies={movieResults[index]}/>))}
    </div>
  )
}

export default GtpMovieSuggestion