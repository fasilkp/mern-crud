import React from 'react'
import { FiSearch } from "react-icons/fi";
import './AdminHeader.css'
function adminHeader() {
  return (
    <div className="navBar">
      <div className="navContainer">
        
        <div className="nav-sec 1">
          <div className="searchBox">
            <input type="text" placeholder='search user' />
            <FiSearch></FiSearch>
          </div>
          <button className='btn btn-dark'>Create User</button>

        </div>
        <div className="nav-sec 2">
            <button className='btn btn-dark'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default adminHeader