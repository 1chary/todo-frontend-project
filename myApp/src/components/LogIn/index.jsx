import React, { useState } from 'react'
import "./index.css"
import { CiUser } from "react-icons/ci";

const LogIn = () => {
    const [name,changeName] = useState("")
    const [password,changePassword] = useState("")
    const [errorMessage,showMessage] = useState(false)


    const storeJwtToken = (token) => {
        Cookies.set("jwtToken", token, {expires: 30})
    }

    const submitTheUserDetails = async (event) => {
        event.preventDefault()
        const api = "https://to-do-backend-project.onrender.com/login"
        const details = {name,password}
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        }
        const response = await fetch(api,options)
        if (response.ok === true) {
            const data = await response.json()
            storeJwtToken(data.jwtToken)
        }
        else {
            showMessage(true)
        }
    }

  return (
    <div className='log-in-page-container'>
        <form className="log-in-box" onSubmit={submitTheUserDetails}>
            <div className="user-icon-container">
                <CiUser className='icon-style'/>
            </div>
            <input type="text" className="user-name-box" placeholder='  username' value={name}
            onChange={(e) => changeName(e.target.value)}
            />
            <input type="password" className="user-name-box" placeholder='  password' value={password} onChange={(e) => changePassword(e.target.value)}
            />
            <button className="log-in-button-style" type = "submit">Log in</button>
            {showMessage === true ? <p className='error-msg'>Username and Password didn't match</p>: ""}
        </form>
    </div>
  )
}

export default LogIn