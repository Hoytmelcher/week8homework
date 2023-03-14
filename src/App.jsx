import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Inventory from './views/Inventory'
import Profile from './views/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
