import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addTrailerVideo } from '../utils/movieSlice'
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = (movieId) =>{
 // const  [trailerId, setTrailerId] = useState(null);
 const dispatch = useDispatch()
 const getMovieBackgroundVideos = async () =>{
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const data = await response.json();
     
      const filterData = data.results.filter((video) => video.name === "Official Trailer")
      const trailer  = filterData.length ? filterData[0] : data.results[0];
      console.log(trailer);   
     //  setTrailerId(trailer.key)
     dispatch(addTrailerVideo(trailer))
     }

useEffect(()=>{
         getMovieBackgroundVideos()
     },[])
}

export default useMovieTrailer;