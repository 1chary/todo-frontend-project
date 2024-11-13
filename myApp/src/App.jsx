import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LogIn from './components/LogIn'

const App = () => {
  return (
    <Routes>
      <Route exact path = "/login" element = {<LogIn/>} />
    </Routes>
  )
}

export default App