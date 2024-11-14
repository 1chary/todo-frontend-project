import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
    </div>
  )
}

export default App