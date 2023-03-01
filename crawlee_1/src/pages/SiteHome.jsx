import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  margin: 15px 5px 0px 260px;
  background-color: red;
  padding: 5px;
 
`;

function SiteHome() {
  return (
    <Container>
      Home
    </Container>
  )
}

export default SiteHome
