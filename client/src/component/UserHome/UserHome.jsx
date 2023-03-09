import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './userhome.css'

function UserHome() {
    useEffect(()=>{
        (async function(){
            const {data} = await axios.get('/check-auth');
        })()
    },[])
    
  return (
    <div className="container mt-5">
    
    <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" />
                </div>
                
                <div className="text-center mt-3">
                    <h5 className="mt-2 mb-0">Alexender Schidmt</h5>
                    <span>UI/UX Designer</span>
                    
                    <div className="px-4 mt-1">
                        <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    
                    </div>
                    
                     <ul className="social-list">
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-dribbble"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-google"></i></li>
                    </ul>
                    
                    <div className="buttons">
                        
                        <button className="btn btn-outline-primary px-4">Logout</button>
                        <button className="btn btn-primary px-4 ms-3">Edit Profile Picture</button>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>
  )
}

export default UserHome