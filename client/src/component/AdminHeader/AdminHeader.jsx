import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';
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
          <Link to="/admin/create-user">
          <button className='btn btn-dark'>Create User</button>
          </Link>

        </div>
        <div className="nav-sec 2">
            <button className='btn btn-dark'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default adminHeader