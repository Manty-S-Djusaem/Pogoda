import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import WeatherCard from './components/WeatherCard'
import Navbar from './components/Navbar'
import Frst from './pages/Frst'
import About from './pages/About'
import { Routes, Route } from "react-router-dom"
import NotPageFound from './pages/PageNotFound'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Content/> } />
        <Route path="about" element={ <About/> } />
        <Route path="*" element={ <NotPageFound/> } />
      </Routes>
      <Navbar></Navbar>
      {/* <Frst></Frst> */}
      {/* <WeatherCard></WeatherCard> */}
    </div>
  )
}

export default App
