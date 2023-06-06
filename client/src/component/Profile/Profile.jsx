import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EditProfileModal from '../../modal/EditProfilePicture'


function Profile() {
    const dispatch = useDispatch()
    async function logout() {
        if(window.confirm("Are you sure logout ")){
            await axios.get('/logout')
            dispatch({type:"refresh"})
        }
    }
    const user= useSelector((state) => {
        return state.user;
      });
      console.log(user)
  const [open, setOpen]=useState(false)
    const baseImgUrl="http://localhost:5000/uploads/"
    return (
        <section style={{backgroundColor: "#eee"}}>
            <div className="container py-5">
            <Link to="/">
            <button className='btn btn-dark mb-3'>Home</button>
            </Link>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src={baseImgUrl+user.details.profile} alt="avatar"
                                    className="rounded-circle img-fluid" style={{width: "150px"}} />
                                <h5 className="my-3">{user.details.name}</h5>
                                <p className="text-muted mb-1">{user.details.proffession}</p>
                                {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                                <div className="d-flex buttons justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-dark" onClick={()=>setOpen(true)}>Edit profile picture</button>
                                    <button type="button" className="btn btn-outline-primary ms-1" onClick={logout}>Logout</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.details.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.details.email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Proffession</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.details.proffession}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">About</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.details.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

              
                    </div>
                </div >
            <EditProfileModal open={open} id={user.details._id} setOpen={setOpen}/>

            </div >
        </section >
    )
}

export default Profile