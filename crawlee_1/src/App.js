import React from 'react';
import styled from 'styled-components';
import backgroundImage02 from './Images/Background02.png';
import Home from './Pages/Home';


const Container02 = styled.div`
background-image:url(${backgroundImage02}) ;
background-Repeat: 'no-repeat';
background-size: cover;
background-position:center;
height: 100vh;
`


function App() {
  return (
    <>
       <Home/>
    </>
  );
}

export default App;
