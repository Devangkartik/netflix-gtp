import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { additsPapularMovies } from "../utils/movieSlice";

const useAddPapularMovies = ()=>{
    const dispatch = useDispatch();

const getPapularData = async () =>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
    const data = await response.json();
    
    dispatch(additsPapularMovies(data.results))
  }
  
  
  useEffect(()=>{
    getPapularData();
  },[])
}
export default useAddPapularMovies;