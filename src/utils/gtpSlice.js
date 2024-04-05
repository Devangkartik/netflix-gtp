import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name : 'gtp',
     initialState:{
      showGtpSearchView : false,
     },
     reducers :{
         toggleGtpSearchView : (state)=>{
             state.showGtpSearchView = !state.showGtpSearchView;
         }
     }
})

export const {toggleGtpSearchView} = gtpSlice.actions;
export default gtpSlice.reducer;