import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./adminhome.css";
import AdminHeader from "../AdminHeader/AdminHeader";

function AdminHome() {
  return (
    <>
      <AdminHeader></AdminHeader>
      <div className="table-main">
        <div className="table-container">
          <table className="table align-middle mb-0 bg-white mt-3">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Proffession</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{width: "45px", height: "45px"}}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">email@gmail.com</p>
                </td>
                <td>Senior</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-rounded btn-sm fw-bold me-1"
                    data-mdb-ripple-color="dark"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{width: "45px", height: "45px"}}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">email@gmail.com</p>
                </td>
                <td>Senior</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-rounded btn-sm fw-bold me-1"
                    data-mdb-ripple-color="dark"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{width: "45px", height: "45px"}}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">John Doe</p>
                      
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">email@gmail.com</p>
                </td>
                <td>Senior</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-dark btn-rounded btn-sm fw-bold me-1"
                    data-mdb-ripple-color="dark"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-rounded btn-sm fw-bold"
                    data-mdb-ripple-color="dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
