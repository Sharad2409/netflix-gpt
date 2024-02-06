import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import moviesSlice from "./moviesSlice";

const appStore = configureStore ({
   reducer: {
    user: UserSlice,
    movies: moviesSlice
   }
})

export default appStore;