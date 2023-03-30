import React from "react";
import styled from "styled-components";
import backgroundImage02 from "../Images/Background02.png";
import course01Img from "../Images/AI.jpg";
import course02Img from "../Images/course02.jpeg";
import course03Img from "../Images/Python.png";
import course04Img from "../Images/C++.png";
import course05Img from "../Images/WebDev.jpg";
import course06Img from "../Images/Full stack.png";
import course07Img from "../Images/ComArchi.jpeg";
import course08Img from "../Images/ComNet.jpg";

const Container02 = styled.div`
  /* background-image:url(${backgroundImage02}) ;
background-Repeat: 'no-repeat';
background-size: cover;
background-position:center; */
  padding-top: 50px;
`;
const Top = styled.span`
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 400px;
`;

const Box = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-content: center;
`;
const Cimage = styled.div`
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  padding: 10px;
  font-weight: bold;
  color: #f0634c;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0634c;
  border-radius: 20px;
  border: #f0634c;
  color: #ffff;
  left: 700px;
`;

function Course() {
  return (
    <div>
      <Container02>
        <Top>
          Courses
          <h1 className="course">Find Your Perfect Course</h1>
        </Top>

        <ImgContainer>
          <Box>
            <Text>Artificial Intelligent</Text>
            <Cimage>
              <img
                src={course01Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>UI/UX Design</Text>
            <Cimage>
              <img
                src={course02Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Python</Text>
            <Cimage>
              <img
                src={course03Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>C++ fo Beginers</Text>
            <Cimage>
              <img
                src={course04Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
        </ImgContainer>
        <ImgContainer>
          <Box>
            <Text>Web Devolopment for Beginers</Text>
            <Cimage>
              <img
                src={course05Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Full Stack course</Text>
            <Cimage>
              <img
                src={course06Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Computer Architecture</Text>
            <Cimage>
              <img
                src={course07Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
          <Box>
            <Text>Computer networking</Text>
            <Cimage>
              <img
                src={course08Img}
                style={{ borderRadius: "15px", width: "100%", height: "90%" }}
              />
            </Cimage>
          </Box>
        </ImgContainer>
        <ButtonContainer>
          <Button>See more →</Button>
        </ButtonContainer>
      </Container02>
    </div>
  );
}

export default Course;
