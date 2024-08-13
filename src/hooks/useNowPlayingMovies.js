import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addnowPlayingMovies} from '../utils/movieSlice'


const useNowPlayingMovies = ()=>{
        const dispatch = useDispatch();
 const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
    const getMoviePlayingData = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        
        dispatch(addnowPlayingMovies(data.results))
      }
      
      
      useEffect(()=>{
     !nowPlayingMovies &&   getMoviePlayingData();
      },[])
}
export default useNowPlayingMovies;