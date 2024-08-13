import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return  null;
  return (
    <div className='m-2 w-40 hover:w-44 md:w-48 hover:md:w-52 pr-4'>
        <img src={IMG_CDN_URL + posterPath} alt="Movie card" />
    </div>
  )
}

export default MovieCard