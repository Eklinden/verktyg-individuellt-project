import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import "./scss/Wireframes.scss"
import AddScore from './views/AddScore'
import Home from './views/home/Home'
import Player from './views/Player'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddScore' element={<AddScore />} />
        <Route path='player' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
