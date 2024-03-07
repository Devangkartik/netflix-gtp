import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addnowPlayingMovies} from '../utils/movieSlice'


const useNowPlayingMovies = ()=>{
        const dispatch = useDispatch();

    const getMoviePlayingData = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const data = await response.json();
        console.log(data);
        dispatch(addnowPlayingMovies(data.results))
      }
      
      
      useEffect(()=>{
        getMoviePlayingData();
      },[])
}
export default useNowPlayingMovies;