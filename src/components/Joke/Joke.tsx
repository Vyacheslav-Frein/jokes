import { FC } from "react";
import { useDispatch } from "react-redux";
import { SJoke } from "./Joke.styles";
import { JokeType } from "./Joke.types";
import { setFavoritesJokes } from "../../store/slices/SetJokesSlice"

export const Joke: FC<JokeType> = ({value, id}) => {
    const dispatch = useDispatch()
    const removeJoke = () => {
        let jokes = JSON.parse(localStorage.getItem('jokes') || '[]')
        jokes = jokes.filter((joke: JokeType) => joke.id !== id)
        console.log(jokes)
        localStorage.setItem('jokes', JSON.stringify(jokes))
        dispatch(setFavoritesJokes())
    }

    return (
        <SJoke>{value}<button onClick={removeJoke}>Удалить</button></SJoke>
    )
}