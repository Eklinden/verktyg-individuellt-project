import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import "./scss/Wireframes.scss"
import AddScore from './views/addScore/AddScore'
import Home from './views/home/Home'
import Player from './views/player/Player'

import EditContextProvider from './context/EditContext'
import GamesContextProvider from './context/GamesContext'
import ToShowContextProvider from './context/ToShowContext'

function App() {
  return (
    <div className="App">
      <GamesContextProvider>

        <EditContextProvider>
          <ToShowContextProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='AddScore' element={<AddScore />} />
              <Route path='player' element={<Player />} />
            </Routes>
          </ToShowContextProvider>
        </EditContextProvider>

      </GamesContextProvider>
    </div>
  )
}

export default App
