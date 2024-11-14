import React, { useState } from 'react'
import "./index.css"
import { CiUser } from "react-icons/ci";
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  const [activeTab,changeActiveTab] = useState("home")


  return (
    <ul className="header-container">
      <li>
        <AnchorLink href='#home'>
            <p className='tab-styling' onClick={() => changeActiveTab("home")}>Home</p>
        </AnchorLink>
      </li>
      <li>
         <AnchorLink href='#about'>
            <p className='tab-styling' onClick={() => changeActiveTab("about")}>about</p>
        </AnchorLink>
      </li>
      <li>
         <AnchorLink href='#services'>
            <p className='tab-styling' onClick={() => changeActiveTab("services")}>services</p>
        </AnchorLink>
      </li>
    </ul>
  )
}

export default Header