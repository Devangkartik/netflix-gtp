import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import { model } from '../utils/openAi'
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { addGeminiMovieResult } from '../utils/gtpSlice'

const GtpSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)

  const searchQuery = useRef(null)
  const dispatch = useDispatch()

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' +
      movie +
      '&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json  = await data.json()

   return json.results
 }

  const handleGeminiSearchClick = async () =>{
   const giminiSearchWords =  "Act as a  Movies Recommendation system and suggest some movie for the query :" + 
   searchQuery.current.value +
    ". Only give the names of 5 Movies , comma seperated like the example result given ahead . Example Results : Gadar, Don, Middle class love, Fittrat, Mela "  ;

  const result = await model.generateContent(giminiSearchWords);
  const geminiMovies = result?.response?.candidates[0]?.content?.parts[0]?.text.split(",")
    
   const promiseArray = geminiMovies?.map((movie) => searchMovieTMDB(movie));

   const tmdbResults = await Promise.all(promiseArray)
  //  [promise,promise,promise,promise,promise]

 dispatch(addGeminiMovieResult({movieNames : geminiMovies, movieResults : tmdbResults}));
  // const text = response.text();
  // console.log(text);
  }
  return (
    <div className='pt-[20%] mx-4 flex justify-center '>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
      <input ref={searchQuery} type="text" className='p-4 m-2 rounded-lg col-span-8 text-black' placeholder={lang[langKey].placeholder}/>
      <button className='p-4 m-2 bg-red-700 text-white rounded-lg col-span-4' onClick={handleGeminiSearchClick}>{lang[langKey].search}</button>
      </form>
    </div>
  )
} 

export default GtpSearchBar