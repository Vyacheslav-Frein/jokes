import { createAsyncThunk } from "@reduxjs/toolkit";

export const getJokeThunk = createAsyncThunk(
    'getJokeThunk',
    async () => {
       const response = await fetch('https://api.chucknorris.io/jokes/random')
       const {value} = await response.json()
       return value
   }
)