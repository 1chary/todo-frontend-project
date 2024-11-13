import React from 'react'
import "./index.css"
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header-container">
        <div className="user-icon">
            <CiUser className='header-icon-style'/>
        </div>
        <h1 className="update-profile-heading">Update Profile Details</h1>
    </div>
  )
}

export default Header