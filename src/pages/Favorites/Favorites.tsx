import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../components/Button/Button"
import { Joke } from "../../components/Joke/Joke"
import { JokeType } from "../../components/Joke/Joke.types"
import { setFavoritesJokes } from "../../store/slices/SetJokesSlice"
import { SButtonContainer, SContainer, SLink } from "./Favorites.style"
import { RootState } from "./Favorites.types"

export const Favorites: FC = () => {
    const jokes = useSelector((state: RootState) => state.SetJokesReducer.favoritesJokes)
    const dispatch = useDispatch()

    const resetJokes = () => {
        localStorage.setItem('jokes', JSON.stringify([]))
        dispatch(setFavoritesJokes())
    }

    return (
        <>
            <SContainer>
                {
                    jokes.map((joke: JokeType) => <Joke id={joke.id} value={joke.value} key={Math.random()} />)
                }
            </SContainer>
            
            <SButtonContainer>
                <Button onClick={resetJokes}>Reset</Button>
                <SLink to='/'>Back</SLink>
            </SButtonContainer>
        </>
    )
}