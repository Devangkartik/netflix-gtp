import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gtpReducer from "./gtpSlice"


const appStore = configureStore({
     reducer:{
        user : userSlice,
        movies : movieSlice,
        gtp : gtpReducer
     }
   }
)

export default appStore;