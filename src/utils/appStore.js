import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gtpReducer from "./gtpSlice";
import configSlice from "./configSlice";


const appStore = configureStore({
     reducer:{
        user : userSlice,
        movies : movieSlice,
        gtp : gtpReducer,
        config : configSlice
     }
   }
)

export default appStore;