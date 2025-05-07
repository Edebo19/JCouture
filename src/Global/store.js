import { configureStore } from "@reduxjs/toolkit";
import Jcouture from "./slice"

export const store = configureStore({
    reducer:{
        Jcouture: Jcouture
    }
})