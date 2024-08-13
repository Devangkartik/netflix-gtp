import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name : 'gtp',
     initialState:{
      showGtpSearchView : false,
      movieNames : null,
      movieResults : null
     },
     reducers :{
         toggleGtpSearchView : (state)=>{
             state.showGtpSearchView = !state.showGtpSearchView;
         },
         addGeminiMovieResult : (state,action) => {
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults
         }
     }
})

export const {toggleGtpSearchView , addGeminiMovieResult} = gtpSlice.actions;
export default gtpSlice.reducer;