import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";

import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import TermsAndCond from "./pages/auth/TermsAndCond";
import ResetPassword from "./pages/auth/ResetPassword";
import Verify from "./pages/auth/Verify";

import Home from "./pages/Home";
import CourseManagement from "./pages/adminDashboard/CourseManagement";
import UserManagement from "./pages/adminDashboard/UserManagement";

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.withCredentials = true; //Axios request will include credentials (cookies) when making cross-origin requests


function App() {
   return (
      <div className="App">
         <Router>
            <ToastContainer />
            <div className="page">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                     path="/login/forgetpassword"
                     element={<ForgetPassword />}
                  />
                  <Route
                     path="/singup/termsandconditions"
                     element={<TermsAndCond />}
                  />
                  <Route
                     path="/resetpassword/:resetToken"
                     element={<ResetPassword />}
                  />
                  <Route
                     path="/verify/:verificationToken"
                     element={<Verify />}
                  />
                  <Route 
                     path="/test"
                     element={<CourseManagement />}
                  />
                  <Route 
                     path="/test2"
                     element={<UserManagement />}
                  />
               </Routes>
            </div>
         </Router>
      </div>
   );
}

export default App;
