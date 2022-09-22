import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import "./scss/Wireframes.scss"
import AddScore from './views/AddScore'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddScore' element={<AddScore />} />
      </Routes>
    </div>
  )
}

export default App
