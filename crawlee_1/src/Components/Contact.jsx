import React from "react";
import styled from "styled-components";
import logo from "../Images/CrawleeLogo.jpg";

const Container01 = styled.div`
background-color: #e78e81;
background-size: cover;
height: 30vh;
width: 100%;
text-align: center;
`

const SpanContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
column-gap: 90px;
`

const Box = styled.div`
width:300px;
height: 160px;
margin: 20px;
position: relative;
text-align: center;
`

const Text = styled.span`
padding: 10px;
font-size: 20px;
font-weight : bold;
font-style: italic;
color:#e73c21 ;
`


const Para = styled.span`
    margin: 5px;
    position: relative;
    font-size: small;
    font-weight: bold;
    
`

function Contact () {
    return (
        <div>
            <Container01>
                <br></br>
                <SpanContainer>
                    <Box>
                        <img height={50} src={logo}/>
                        <Para>shufsg vksdkugvs kusvbusv kugsv jhbhvd juhbvsd uvusvf</Para>
                    </Box>
                    <Box>
                        <Text>Contact info</Text>
                        <br></br>
                        <Para>E-mail : crawlee@exampl.com</Para>
                        <br></br>
                        <Para>Main : 011-4562395</Para>
                        <br></br>
                        <Para>Address : abc, astf, auygda</Para>
                    </Box>
                    <Box>
                        <Text>Follow Us</Text>
                        
                    </Box>
                </SpanContainer>
            </Container01>
        </div>
    )
}

export default Contact

