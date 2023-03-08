// import './App.css';
import UserHome from "./component/UserHome/UserHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./component/UserLogin/UserLogin";
import UserRegister from "./component/UserRegister/UserRegister";
import AdminLogin from "./component/AdminLogin/AdminLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserHome />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/admin/login" element={<AdminLogin />}></Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
