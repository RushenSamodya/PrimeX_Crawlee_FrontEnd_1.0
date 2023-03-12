import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Messages from './pages/Messages';
import SiteHome from './pages/SiteHome';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CreateCourse from "./pages/CreateCourse";


import Home from './Pages/Home';
import About from './Pages/About.js';
import Courses from './Pages/Courses.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import NavbarHorizontal from './NavbarHorizontal.jsx';

import logo from './logo.svg';
import './App.css';

function App() {

  const [query,setQuery] = useState("Dashboard");

  return (
    <div className="App">

      <NavbarHorizontal/>

      <Router>
      <Sidebar setQuery={setQuery}/>
      console.log(setQuery);
      <Navbar query={query}/>
      <Routes> 
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/home' element={<SiteHome/>} />
        <Route path='/create-course' element={<CreateCourse/>} />

        <Route path='Pages/' element ={<Home/>}/>
            <Route path='Pages/courses' element ={<Courses/>}/>
            <Route path='Pages/About' element ={<About/>}/>
            <Route path='Pages/login' element ={<Login/>}/>
            <Route path='Pages/sign-up' element ={<Signup/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

