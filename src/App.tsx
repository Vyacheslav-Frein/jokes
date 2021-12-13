import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Favorites } from "./pages/Favorites/Favorites"
import { GetJokes } from "./pages/GetJokes/GetJokes"

export const App = () => {
  if(!localStorage.length) {
    localStorage.setItem('jokes', JSON.stringify([]))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetJokes />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}