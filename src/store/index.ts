import { configureStore } from "@reduxjs/toolkit";
import { SetJokesReducer } from "./slices/SetJokesSlice";

export const store = configureStore(
    {
        reducer: {
            SetJokesReducer
        }
    }
)