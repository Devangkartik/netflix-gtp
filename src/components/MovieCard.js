import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className=''>
        <img src={IMG_CDN_URL + posterPath} alt="Movie card" />
    </div>
  )
}

export default MovieCard