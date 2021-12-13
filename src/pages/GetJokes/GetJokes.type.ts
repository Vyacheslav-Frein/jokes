export type intervalID = null | ReturnType<typeof setInterval>
export type RootState = {
    SetJokesReducer: {
        currentJoke: string
    }
}