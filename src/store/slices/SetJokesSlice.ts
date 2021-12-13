import { createSlice } from "@reduxjs/toolkit";
import { getJokeThunk } from "../thunks/getJokeThunk";

export const SetJokesSlice = createSlice(
    {
        name: 'SetJokesSlice',
        initialState: {
            currentJoke: 'A joke',
            favoritesJokes: JSON.parse(localStorage.getItem('jokes') || '[]')
        },
        reducers: {
            setFavoritesJokes: (state) => {
                state.favoritesJokes = JSON.parse(localStorage.getItem('jokes') || '[]')
            }
        },
        extraReducers: (builder) => {
            builder.addCase(getJokeThunk.fulfilled, (state, {payload}) => {
                state.currentJoke = payload
            })
        }
    }
)

export const {setFavoritesJokes} = SetJokesSlice.actions

export const SetJokesReducer = SetJokesSlice.reducer