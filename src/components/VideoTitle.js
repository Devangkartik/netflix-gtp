import React from 'react'


const VideoTitle = ({title , overview})=>{
    return(
        <div className='w-screen aspect-video pt-56 px-12 absolute text-white bg-gradient-to-r from-black'>
           <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
           <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
           <div>
            <button className='bg-gray-400 m-1 p-1 md:m-2 md:p-2  bg-opacity-50 rounded-lg'>▶️ Play </button>
            <button className='hidden md:inline-block bg-gray-400 m-2 p-2 px-6 bg-opacity-50 rounded-lg'  > ₪ More info</button>
           </div>
        </div>
    )
}

export default VideoTitle;