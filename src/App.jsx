import './App.css'
import AlbumDetails from './components/AlbumDetails'
import AudioPlayer from './components/AudioPlayer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Library from './pages/Library'
import NoPage from "./pages/NoPage"
import {BrowserRouter, Routes, Route} from "react-router-dom"


export default function App() {  
  return (
    <BrowserRouter>
      <div id="app">
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/album/:id" element={<AlbumDetails />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
        <AudioPlayer />
      </div>
    </BrowserRouter>
  )
}
