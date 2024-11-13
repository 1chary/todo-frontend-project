import React, { useEffect, useState } from 'react'
import "./index.css"
import Header from '../Header'

let toDoList = [
  {toDoId: 1, description: "AI ASSIGNMENT", status: "done"},
  {toDoId: 2, description: "ML ASSIGNMENT", status: "done"},
  {toDoId: 3, description: "PYTHON ASSIGNMENT", status: "pending"},
  {toDoId: 4, description: "JS ASSIGNMENT", status: "inProgress"},
  {toDoId: 5, description: "CSS ASSIGNMENT", status: "completed"}
]


const Home = () => {

  return (
    <div className="home-page-container">
      <Header/>
      
    </div>
  )
}

export default Home