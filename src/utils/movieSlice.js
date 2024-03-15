import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState :{ 
        nowPlayingMovies : null,
        trailerVideo : null
    },
    reducers : {
      addnowPlayingMovies : (state,action) =>{
         state.nowPlayingMovies = action.payload;
      },
      addTrailerVideo: (state,action) =>{
        state.trailerVideo = action.payload;
      }
    }

})

export const {addnowPlayingMovies,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;