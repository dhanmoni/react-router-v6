import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='menu' element={<Menu/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
