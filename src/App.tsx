import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import AddScore from './views/AddScore'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddScore' element={<AddScore />} />
      </Routes>
    </div>
  )
}

export default App
