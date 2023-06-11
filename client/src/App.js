import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Messages from "./pages/Messages";
import SiteHome from "./pages/SiteHome";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CreateCourse from "./pages/CreateCourse";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";
import AdminCourseManagement from "./pages/Admin/AdminCourseManagement";



function App() {
  // const [query, setQuery] = useState("Dashboard");

  return (
    <div className="App">
      <Router>
        {/* <Sidebar setQuery={setQuery} />
        console.log(setQuery);
        <Navbar query={query} /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/home" element={<SiteHome />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/userManagement" element={<AdminUserManagement/>} />
          <Route path="/courseManagement" element={<AdminCourseManagement/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
