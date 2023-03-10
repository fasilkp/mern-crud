import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import './userhome.css'
import { useNavigate } from 'react-router-dom'
import EditProfileModal from '../../modal/EditProfilePicture'

function UserHome() {
    const navigate = useNavigate();

    async function logout() {
        if(window.confirm("Are you sure logout ")){

            await axios.get('/logout')
            return window.location.reload()
        }

    }
    const user= useSelector((state) => {
        return state.user;
      });
      console.log(user)
  const [open, setOpen]=useState(false)


    return (
        <div className='w-100 d-flex align-items-center' style={{height:"100vh"}}>

        <div className="container" style={{marginTop:"-100px"}}>

            <div className="row d-flex justify-content-center">

                <div className="col-md-7">

                    <div className="card p-3 py-4">

                        <div className="text-center">
                            <img src="https://i.imgur.com/bDLhJiP.jpg" width="100" className="rounded-circle" />
                        </div>

                        <div className="text-center mt-3">
                            <h4 className="mt-2 mb-0">{user.details.name}</h4>
                            <span className='text-secondary'>{user.details.proffession}</span>

                            <div className="px-4 mt-1">
                                <p className="fonts">{user.details.about}</p>

                            </div>

                            <div className="buttons mt-4">

                                <button className="btn btn-outline-primary px-4" onClick={logout}>Logout</button>
                                <button className="btn btn-primary px-4 ms-3" onClick={()=>setOpen(true)}>Edit Profile Picture</button>
                            </div>


                        </div>




                    </div>

                </div>

            </div>
            <EditProfileModal open={open} setOpen={setOpen}/>


        </div>
        </div>

    )
}

export default UserHome