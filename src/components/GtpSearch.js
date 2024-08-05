import React from 'react'
import { bgImage } from '../utils/constants'
import GtpSearchBar from './GtpSearchBar'
import GtpMovieSuggestion from './GtpMovieSuggestion'

const GtpSearch = () => {
  return (
  <>
    <div className='absolute -z-10'>
    <img className='' src={bgImage} alt="backgroung/img"  />
    </div>
    <div className='pt-[30%] md:p-0'>
        <GtpSearchBar/>
        <GtpMovieSuggestion/>
    </div>
    </>
  )
}

export default GtpSearch