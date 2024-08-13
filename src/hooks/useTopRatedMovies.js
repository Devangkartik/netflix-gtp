import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrandingMovies } from "../utils/movieSlice";

const useTopRatedMovies = () =>{
   const dispatch = useDispatch()
   const trandingMovies = useSelector((store)=>store.movies.trandingMovies)
    const getTopRatedMoviesData = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const data = await response.json()

        dispatch(addTrandingMovies(data.results));
    }
   
    useEffect(()=>{
     !trandingMovies && getTopRatedMoviesData()
    },[])
}

export default useTopRatedMovies;