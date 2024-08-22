import React from 'react'
import { bgImage } from '../utils/constants'
import GtpSearchBar from './GtpSearchBar'
import GtpMovieSuggestion from './GtpMovieSuggestion'

const GtpSearch = () => {
  return (
  <>
    <div className='absolute -z-10'>
       <img className='fixed h-screen w-screen object-cover' src={bgImage} alt="backgroung/img"  />
    </div>
    <div className='pt-[40%] md:p-0'>
        <GtpSearchBar/>
        <GtpMovieSuggestion/>
    </div>
 </>
  )
}

export default GtpSearch