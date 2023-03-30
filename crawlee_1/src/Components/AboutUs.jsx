import React from "react";
import styled from "styled-components";
import backgroundImage from "../Images/Background.png";
import backgroundImage02 from "../Images/Background02.png";
import graduate from "../Images/Graduated.jpg";

const Container03 = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Top = styled.span`
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #f0634c;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 300px;
  column-gap: 50px;
`;

const TextBox = styled.div`
  width: 450px;
  height: 200px;
  padding-top: 20px;
  position: relative;
  text-align: center;
`;

const Text = styled.span`
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-style: italic;
  font-size: larger;
`;

const Para = styled.span`
  margin: 50px;
  position: relative;
  top: 40px;
`;

const Container04 = styled.div`
  background-image: url(${backgroundImage02});
  background-repeat: "no-repeat";
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const AImg = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  margin-left: 220px;
  border-radius: 10px;
  position: relative;
`;

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
  position: relative;
  left: 435px;
`;

const Title = styled.div`
    padding-left: 250px;
`

function AboutUs() {
  return (
    <div>
      <Container03>
        <Top>
          <h2>About Us</h2>
        </Top>

        <SpanContainer>
          <TextBox>
            <Text>Why Us</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
        </SpanContainer>
        <SpanContainer>
          <TextBox>
            <Text>Great Experience</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
          <TextBox>
            <Text>Dedicated Team</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
          <TextBox>
            <Text>Free For All</Text>

            <Para>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because "
            </Para>
          </TextBox>
        </SpanContainer>
      </Container03>
      <Container04>
        <Top><h2>Our Mission</h2></Top>
        <Title><h1>Build Better For Best Economy</h1></Title>
        <SpanContainer>
          <TextBox>
            <Para margin-right={100}>
              I see this opportunity as a way to contribute to an
              exciting/forward-thinking/fast-moving company/industry, and I feel
              I can do so by/with my …” “I feel my skills are particularly
              well-suited to this position because " I see this opportunity as a
              way to contribute to an exciting/forward-thinking/fast-moving
              company/industry, and I feel I can do so by/with my …” “I feel my
              skills are particularly well-suited to this position because "
            </Para>
          </TextBox>
          <AImg>
            <img height={500} src={graduate} style={{ borderRadius: "15px" }} />
          </AImg>
        </SpanContainer>
        <StyledButton>Join With Us</StyledButton>
      </Container04>
    </div>
  );
}

export default AboutUs;
