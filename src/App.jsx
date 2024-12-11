import './App.css'
import React from "react";
import Home from "./pages/Home.jsx"
import Movie from "./pages/Movie.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":id" element={<Movie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
