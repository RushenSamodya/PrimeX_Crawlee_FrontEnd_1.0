import React from "react";
import styled from "styled-components";
import backgroundImage from "../Images/Background.png";
import image11 from "../Images/11 1.png";
import image22 from "../Images/22 1.png";
import image33 from "../Images/33 1.png";

const Container01 = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 160vh;
  text-align: center;
`;
const Top = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 80px;
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 50px;
`;
const HLine = styled.div`
  width: 3px;
  background-color: #f0634c;
  height: 40px;
  background-color: #f0634c;
`;

const Text = styled.span`
  padding: 10px;
  font-weight: 12px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`

const StyledButton = styled.button`
  width: 110px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0634c;
  border-radius: 10px;
  border: #f0634c;
  color: #ffff;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  height: 300px;
  column-gap: 150px;
`;

const AImg = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 450px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 15px 20px 32px rgba(0, 0, 0, 0.2);
  position: relative;
`;

function Home() {
  return (
    <div>
      <Container01>
        <Top>
          Grow Your Skills to <br></br>Advance Your Career Path.
        </Top>

        <SpanContainer>
          <Text>No Payment Method </Text>
          <HLine></HLine>
          <Text>Free For Students </Text>
          <HLine></HLine>
          <Text>Free For Teachers </Text>
        </SpanContainer>
        <ButtonWrapper>
          <StyledButton>Enroll Now</StyledButton>
        </ButtonWrapper>

        <ImgContainer>
          <AImg>
            <img src={image22} />
          </AImg>
          <AImg style={{ backgroundColor: "#F0634C" }}>
            <img src={image11} />
          </AImg>
          <AImg>
            <img src={image33} />
          </AImg>
        </ImgContainer>
      </Container01>
    </div>
  );
}

export default Home;
