import { useSelector } from "react-redux"
import { RootState } from "./JokeText.types"
import { SJoke, SJokeHeading } from "./JokeText.style"
import { FC } from "react"

export const JokeText: FC = () => {
    const joke = useSelector((state: RootState) => state.SetJokesReducer.currentJoke)
    return (
        <SJoke><SJokeHeading>Chuck Norris once said: </SJokeHeading>{joke}</SJoke>
    )
}