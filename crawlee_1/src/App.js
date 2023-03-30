import React from 'react';
import styled from 'styled-components';
import backgroundImage02 from './Images/Background02.png';
import Home from './Component/Home';
import Courses from './Component/Courses';
import AboutUs from './Component/AboutUs';
import Contact from './Component/Contact';

const Container02 = styled.div`
background-image:url(${backgroundImage02}) ;
background-Repeat: 'no-repeat';
background-size: cover;
background-position:center;
height: 100vh;
`


function App() {
  return (
    <div className="App">
      <Home></Home>
      <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
      <Courses></Courses>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </div>
  );
}

export default App;
