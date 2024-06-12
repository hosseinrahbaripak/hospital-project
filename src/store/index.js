import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer/mainSlice";
export const store = configureStore({
    reducer:{
        mainSlice:mainReducer
    }
});