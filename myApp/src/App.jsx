import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route exact path = "/login" element = {<LogIn/>} />
    </Routes>
  )
}

export default App