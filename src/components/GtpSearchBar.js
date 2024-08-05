import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GtpSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12' >
      <input type="text" className='p-4 m-2 rounded-lg col-span-8 text-black' placeholder={lang[langKey].placeholder}/>
      <button className='p-4 m-2 bg-red-700 text-white rounded-lg col-span-4'>{lang[langKey].search}</button>
      </form>
    </div>
  )
} 

export default GtpSearchBar