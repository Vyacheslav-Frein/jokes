import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ButtonsContainer, SLink } from "./GetJokes.style"
import { intervalID, RootState } from "./GetJokes.type"
import { Button } from "../../components/Button/Button"
import { JokeText } from "../../components/JokeText/JokeText"
import { getJokeThunk } from "../../store/thunks/getJokeThunk"
import { setFavoritesJokes } from "../../store/slices/SetJokesSlice"

export const GetJokes: FC = () => {
    const dispatch = useDispatch()
    const joke = useSelector((state: RootState) => state.SetJokesReducer.currentJoke)
    const [intervalID, setIntervalID] = useState<intervalID>(null)
    const [gettingJokes, gettingJokesToggle] = useState(false)

    const getJoke = () => {
        dispatch(getJokeThunk())
    }

    const getJokesToggle = () => {
        if(intervalID) {
            gettingJokesToggle(!gettingJokes)
            clearInterval(intervalID)
            setIntervalID(null)
        }else{
            gettingJokesToggle(!gettingJokes)
            setIntervalID(setInterval(() => {getJoke()}, 3000))
        }
    }

    const saveJoke = () => {
        const jokes = JSON.parse(localStorage.getItem("jokes") || '[]')
        if(jokes.length === 10) {
            jokes.shift()
            jokes.push({id: jokes.length ? jokes[jokes.length - 1].id + 1 : 0, value: joke})
        }else {
            jokes.push({id: jokes.length ? jokes[jokes.length - 1].id + 1 : 0, value: joke})
            localStorage.setItem('jokes', JSON.stringify(jokes))
        }
        dispatch(setFavoritesJokes())
    }

    return (
        <>
            <JokeText />
            <ButtonsContainer>
                <Button onClick={getJoke}>Get joke</Button>
                <Button onClick={getJokesToggle}>{gettingJokes ? 'Stop' : 'Start'} getting jokes</Button>
                <Button onClick={saveJoke}>Save</Button>
                <SLink onClick={getJokesToggle} to='/favorites'>Favorites</SLink>
            </ButtonsContainer>
        </>
    )
}