import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState :{ 
        trandingMovies : null,
        nowPlayingMovies : null,
        itsPapularMovies : null,
        trailerVideo : null,
        upcomingMovies : null
    },
    reducers : {
      
      addnowPlayingMovies : (state,action) =>{
         state.nowPlayingMovies = action.payload;
      },
      addTrailerVideo: (state,action) =>{
        state.trailerVideo = action.payload;
      },
      additsPapularMovies : (state, action) =>{
        state.itsPapularMovies = action.payload;
      },
       addTrandingMovies : (state,action) =>{
        state.trandingMovies = action.payload;
       },
       addUpcomingMovies : (state,action) =>{
        state.upcomingMovies = action.payload;
       }
    }

})

export const {addnowPlayingMovies,addTrailerVideo,additsPapularMovies,addTrandingMovies,addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;