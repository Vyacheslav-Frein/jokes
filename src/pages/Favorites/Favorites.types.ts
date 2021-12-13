import { JokeType } from "../../components/Joke/Joke.types";

export type RootState = {
    SetJokesReducer: {
        currentJoke: string,
        favoritesJokes: JokeType[]
    }
}