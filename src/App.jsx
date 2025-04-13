import "./css/App.css"
import Home from "./pages/home"
import Navbar from "./components/Navbar"
import Favourites from "./pages/favourites"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Navbar/>
      <main className="main-box">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
