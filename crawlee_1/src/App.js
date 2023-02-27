
import Navbar from './Navbar.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About.js';
import Courses from './Courses.js';
import Login from './Login.js';
import Signup from './Signup.js';

//import TopNav2 from './TopNav2.jsx';
//import Sidebar from './Sidebar.jsx';

function App() {
  return (
    <div className="App">
      
        {/* <TopNav2/>
        <Sidebar/> */}
        <Navbar/>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='courses' element ={<Courses/>}/>
            <Route path='About' element ={<About/>}/>
            <Route path='login' element ={<Login/>}/>
            <Route path='sign-up' element ={<Signup/>}/>
          </Routes>
       
    </div>
  );
}

export default App;

