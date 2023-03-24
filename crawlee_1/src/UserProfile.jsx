import React, { useState} from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillShieldFill } from "react-icons/bs";
import { IconButton } from "@mui/material";


const BigContainer = styled.div`
  padding-bottom: 80px;
`

const ContainerMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 15px 5px 0px 260px;
  padding: 5px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
const UserBar = styled.div`
  margin-left: 40px;
  width: 95%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  align-items: center;
`;
const RightSection = styled.div`
  display: flex;
  margin-left: 20px;
  padding: 10px;
  align-items: center;
`;
const UserIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 60px;
`;
const UserInfo = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  column-gap: 0px;
  align-items: start;
  gap: 5px;
`;

const UserName = styled.span`
  font-size: 18px;
  flex: 4;
`;
const UserRole = styled.span`
  font-size: 14px;
  font-weight: 200;
  color: #F0634C;

`;

const LeftSection = styled.div`
  margin-right: 30px;
`;

const SettingsIcon = styled.button`
  display: flex;
  align-items: center;
  padding: 7px;
  border-radius: 10px;
  border: none;
  background-color: #f2563e;
  transition: all 0.1s ease;
`;

//Container 2.1 css

const Container2 = styled.div`
  width: 50%;
  height: 100%;
  background-color: red;
  margin-left: 304px;
  margin-top: 20px;
  background-color: #f5f5f5;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
`;

const UserDetailContainer = styled.div`
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 15px;
`;

const RightSection2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserDetailsSet = styled.div`
  padding: 20px;
  color: #777c88;
  font-size: 20px;
  display: flex;
  align-items: flex-start;
  font-weight: 600px;
`;

const EmailSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const EmailText = styled.span`
  color: #f0634c;
  font-size: 16px;
  font-weight: 600px;
`;

const Email = styled.span`
  font-size: 14px;
`;

const MobileNumberSet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const MobileNumbeText = styled.span`
  color: #f0634c;
  font-size: 16px;
  font-weight: 800px;
`;

const MobileNumber = styled.span`
  font-size: 14px;
`;

const EditButton = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: #f2563e;
  transition: all 0.1s ease;
`;

const LeftSection2 = styled.div`
  padding-top: 12px;
`;

//Container 2.2 css

const EnrolledCoursesContainer = styled.div`
  margin-top: 20px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 15px;
`;

const EnrolledCoursesItems = styled.span`
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MainTag = styled.div`
  color: #777c88;
  font-weight: 600px;
  font-size: 20px;
  padding: 15px;
`;

const CourseList = styled.div`
  color: #f0634c;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 15px;
  gap: 5px;
`;

const CourseName1 = styled.span``;

const CourseName2 = styled.span``;

const CourseName3 = styled.span``;

// Container 3 css

const Container3 = styled.span`
  margin-top: 20px;
  height: 100%;
  width: 24%;
  background-color: #f5f5f5;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const BadgeItems = styled.span`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
`;

const BadgeText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #333333;
`;

const BadgeIcons = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 60px;
`;

const BadgeIcon1 = styled.span`
  color: #777C88
;
`;
const BadgeIcon2 = styled.span`
  color: #777C88
;
`;
const BadgeIcon3 = styled.span`
  color: #777C88
;
`;



function UserProfile(props) {

  const [userRole, setUserRole] = useState("Student");
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
    setUserRole(login ? "Teacher" : "Student");
  };

  return (
    <>
    <BigContainer>
      <Container>
        <UserBar>
          <RightSection>
            <UserIcon>
            <IconButton>
              <FaUserCircle style={{ fontSize: "65px"}} onClick = {handleLogin} />
              </IconButton>
            </UserIcon>
            <UserInfo>
              <UserName>UserName</UserName>
              <UserRole>{userRole}</UserRole>
            </UserInfo>
          </RightSection>
          <LeftSection>
            <IconButton>
              <SettingsIcon>
                <AiFillSetting style={{ fontSize: "20px", color: "white" }} />
              </SettingsIcon>
            </IconButton>
          </LeftSection>
        </UserBar>
      </Container>
      {/* 2nd Container with the user details */}
      <ContainerMain>
        <Container2>
          <UserDetailContainer>
            <RightSection2>
              <UserDetailsSet>User Details</UserDetailsSet>
              <EmailSet>
                <EmailText>Email</EmailText>
                <Email>rushenssamodya@gmail.com</Email>
              </EmailSet>
              <MobileNumberSet>
                <MobileNumbeText>Mobile Number</MobileNumbeText>
                <MobileNumber>0769771694</MobileNumber>
              </MobileNumberSet>
            </RightSection2>
            <LeftSection2>
              <IconButton>
              <EditButton>
                <MdModeEditOutline
                  style={{ fontSize: "20px", color: "white" }}
                />
              </EditButton>
              </IconButton>
            </LeftSection2>
          </UserDetailContainer>

          <EnrolledCoursesContainer>
            <EnrolledCoursesItems>
              <MainTag>Enrolled Courses</MainTag>
              <CourseList>
                <CourseName1>Sample Course 1</CourseName1>
                <CourseName2>Sample Course 2</CourseName2>
                <CourseName3>Sample Course 3</CourseName3>
              </CourseList>
            </EnrolledCoursesItems>
          </EnrolledCoursesContainer>

          <EnrolledCoursesContainer>
            <EnrolledCoursesItems>
              <MainTag>Completed Courses</MainTag>
              <CourseList>
                <CourseName1>Sample Course 1</CourseName1>
                <CourseName2>Sample Course 2</CourseName2>
                <CourseName3>Sample Course 3</CourseName3>
              </CourseList>
            </EnrolledCoursesItems>
          </EnrolledCoursesContainer>
        </Container2>

        <Container3>
          <BadgeItems>
            <BadgeText>Earned Badges</BadgeText>
            <BadgeIcons>
              <BadgeIcon1>
                <BsFillShieldFill />
              </BadgeIcon1>
              <BadgeIcon2>
                <BsFillShieldFill />
              </BadgeIcon2>
              <BadgeIcon3>
                <BsFillShieldFill />
              </BadgeIcon3>
            </BadgeIcons>
          </BadgeItems>
        </Container3>
      </ContainerMain>
      </BigContainer>
    </>
  );
}

export default UserProfile;
