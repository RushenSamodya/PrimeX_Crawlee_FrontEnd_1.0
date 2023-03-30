import React from "react";
import styled from 'styled-components';
import backgroundImage02 from '../Images/Background02.png';
import course01Img from '../Images/AI.jpg';
import course02Img from '../Images/course02.jpeg';
import course03Img from '../Images/Python.png';
import course04Img from '../Images/C++.png';
import course05Img from '../Images/WebDev.jpg';
import course06Img from '../Images/Full stack.png';
import course07Img from '../Images/ComArchi.jpeg';
import course08Img from '../Images/ComNet.jpg';

import '../App.css';


const Container02 = styled.div`
background-image:url(${backgroundImage02}) ;
background-Repeat: 'no-repeat';
background-size: cover;
background-position:center;
height: 100vh;
`
const Top= styled.span`
padding: 30px;
font-size:20px;
font-weight:bold;
position: relative;
left: 150px;
color:#F0634C;
`

const ImgContainer = styled.div`
margin: 20px;
display: flex;
justify-content: center;
align-content: center;
height: 400px;
`

const Box = styled.div`
background-color: #ffffff;
  width:300px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(0,0,0,0.2);
  position: relative;
  align-content: center;
  align-items: center;
`
const Cimage = styled.div`
  width:200px;
  height: 200px;
`

const Text = styled.span`
padding: 10px;
font-weight : bold;
color:#F0634C ;
`
const Button = styled.button`
width:110px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
  background-color: #F0634C;
  border-radius: 20px;
  border: #F0634C;
  color: #ffff;
position: absolute;
left: 700px;
`

function Courses() {
    return (
        <div>
            <br></br><br></br><br></br>
            <Container02>
                <Top>Courses</Top>
                <h1 className="course">Find Your Perfect Course</h1>
                <br></br><br></br><br></br>
                <ImgContainer>
                <Box>
                <Text>Artificial Intelligent</Text>
                <Cimage>
                <img width={200} height={200} src={course01Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>UI/UX Design</Text>
                <Cimage>
                <img width={200} height={200} src={course02Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>Python</Text>
                <Cimage>
                <img width={200} height={200} src={course03Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>C++ fo Beginers</Text>
                <Cimage>
                <img width={200} height={200} src={course04Img}/>
                </Cimage>
                </Box>
                </ImgContainer>
                <ImgContainer>
                <Box>
                <Text>Web Devolopment for Beginers</Text>
                <Cimage>
                <img width={200} height={200} src={course05Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>Full Stack course</Text>
                <Cimage>
                <img width={200} height={200} src={course06Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>Computer Architecture</Text>
                <Cimage>
                <img width={200} height={200} src={course07Img}/>
                </Cimage>
                </Box>
                <Box>
                <Text>Computer networking</Text>
                <Cimage>
                <img width={200} height={200} src={course08Img}/>
                </Cimage>
                </Box>
                </ImgContainer>
                <Button>See more →</Button>
            </Container02>
        </div>
    )
}

export default Courses