import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 240px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: #dadada;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;
const CardTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  color: rgba(51, 51, 51, 1);
`;
const CardTitle = styled.h1`
  margin-left: 15px;
  font-size: 18px;
`;
const CardIcon = styled.div`
  margin-right: 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
const CardValue = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
  color: #f0634c;
`;

const Card = (props) => {
  return (
    <Container>
      <CardTop>
        <CardTitle>{props.title}</CardTitle>
        <CardIcon>{props.icon}</CardIcon>
      </CardTop>
      <CardValue>{props.value}</CardValue>
    </Container>
  );
};

//

export default Card;
