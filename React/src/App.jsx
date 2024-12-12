import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FilmProvider } from './contexts/FilmContext'
import React from "react"
import Home from "./pages/Home.jsx"
import Movie from "./pages/Movie.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <FilmProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path=":id" element={<Movie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilmProvider>
    </>
  )
}

export default App
