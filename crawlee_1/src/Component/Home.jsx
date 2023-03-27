import React from "react";
import styled from 'styled-components';
import backgroundImage from '../Images/Background.png';
import image11 from '../Images/11 1.png';
import image22 from '../Images/22 1.png';
import image33 from '../Images/33 1.png';

const Container01 = styled.div`
background-image: url(${backgroundImage});
background-Repeat: 'no-repeat';
background-size: cover;
background-position: center;
height: 100vh;
text-align: center;
`
const Top= styled.span`
padding: 20px;
font-size:80px;
font-weight:bold;
text-align: center;
`

const SpanContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
`
const HLine= styled.div`
width:3px;
background-color:#F0634C;
height: 40px;
background-color: #F0634C;
`

const Text = styled.span`
padding: 10px;
font-weight : 12px;
`

const StyledButton = styled.button`
width:110px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
  background-color: #F0634C;
  border-radius: 10px;
  border: #F0634C;
  color: #ffff;
position: relative;
left: 700px;
`

const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
height: 300px;
column-gap: 150px;
`

const AImg = styled.div`
background-color: #ffffff;
  width:300px;
  height: 450px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 20px 32px rgba(0,0,0,0.2);
  position: relative;
`

function Home() {
    return (
        <div>
            <Container01>
      <br></br>
      <br></br>
      <Top>Grow Your Skills to <br></br>Advance Your Career Path.</Top>
        <br></br><br></br>
        <SpanContainer>
        <Text>No Payment Method   </Text>
        <HLine></HLine>
        <Text>Free For Students   </Text>
        <HLine></HLine>
        <Text>Free For Teachers  </Text>
        </SpanContainer>
        <br></br><br></br>
        <StyledButton>Enroll Now</StyledButton>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <ImgContainer>
        <AImg><img src={image22}/></AImg>
        <AImg style={{ backgroundColor: '#F0634C'}}><img src={image11}/></AImg>
        <AImg><img src={image33}/></AImg>
        </ImgContainer>
      </Container01>
        </div>
    )
}

export default Home