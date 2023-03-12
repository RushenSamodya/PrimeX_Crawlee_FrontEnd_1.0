import React from "react";
import styled from "styled-components";
import { ImBooks } from "react-icons/im";

const Container = styled.div`
  flex: 1;
  margin: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
const Header = styled.span`
  font-size: 20px;
`;
const MiddleSection = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const Shortcut = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  margin-bottom: 10px;
  align-items: center;
`;

const Icon = styled.div`
  font-size: 18px;
`;
const ShortcutName = styled.div`
  font-size: 16px;
`;

const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px 20px 20px;
`;
const Button = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 15px 20px;
  border-radius: 15px;
  border: #f0634c solid 2px;
  background-color: white;
  color: #f0634c;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    padding: 17px 22px;
  }
`;
const Shortcuts = () => {
  return (
    <Container>
      <TopSection>
        <Header>Shortcuts</Header>
      </TopSection>
      <MiddleSection>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
        <Shortcut>
          <Icon>
            <ImBooks />
          </Icon>
          <ShortcutName>Created Courses</ShortcutName>
        </Shortcut>
      </MiddleSection>
      <BottomSection>
        <Button>Create Course</Button>
      </BottomSection>
    </Container>
  );
};

export default Shortcuts;
