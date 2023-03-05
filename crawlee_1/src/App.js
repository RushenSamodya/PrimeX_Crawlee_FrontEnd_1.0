

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About.js';
import Courses from './Pages/Courses.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import NavbarHorizontal from './NavbarHorizontal.jsx';

//import TopNav2 from './TopNav2.jsx';
//import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div className="App">
      
        {/* <TopNav2/>
        <Sidebar/> */}
        <NavbarHorizontal/>
          <Routes>
            <Route path='Pages/' element ={<Home/>}/>
            <Route path='Pages/courses' element ={<Courses/>}/>
            <Route path='Pages/About' element ={<About/>}/>
            <Route path='Pages/login' element ={<Login/>}/>
            <Route path='Pages/sign-up' element ={<Signup/>}/>
          </Routes>
       
    </div>
  );
}

export default App;

