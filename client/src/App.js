// import './App.css';
import UserHome from "./component/UserHome/UserHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./component/UserLogin/UserLogin";
import UserRegister from "./component/UserRegister/UserRegister";
import AdminLogin from "./component/AdminLogin/AdminLogin";
import AdminHome from "./component/AdminHome/AdminHome";
import CreateUser from "./component/CreateUser/CreateUser";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/";

  const user = useSelector((state) => {
    return state.user;
  });
  console.log(user);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserHome />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
          <Route path="/admin/create-user" element={<CreateUser />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
