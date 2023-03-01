import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Messages from './pages/Messages';
import SiteHome from './pages/SiteHome';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useState } from "react";
import CreateCourse from "./pages/CreateCourse";

function App() {

  const [query,setQuery] = useState("Dashboard");

  return (
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
      </Routes>
    </Router>
  );
}

export default App;
