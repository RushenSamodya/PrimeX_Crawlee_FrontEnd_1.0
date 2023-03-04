import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';



const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0em; 
    text-align: center;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;

`;

const Middle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    color: #5e5f62;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: 0.4s;
    
`;

const HomeConatiner = styled.div`
    
`;

const CourseContainer = styled.div`
    
`;

const AboutContainer = styled.div`
    
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    padding: 10px 20px;  
    border: none;
    cursor: pointer;
`;


function NavbarHorizontal() {

    const logo = require('./Images/crawleeimg.png');
    const navigate = useNavigate();

    const btnStyles ={
        "&.MuiButton-text":{
            color: '#5e5f62',
            textTransform: 'none',
            padding: "10px 20px",
            borderRadius: '15px',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',

            
        },
        "&.MuiButton-text.active":{
            color: '#000000',
            textTransform: 'none',
            padding: "10px 20px",
            borderRadius: '15px',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',

            
        },

        "&.MuiButton-outlined":{
            color: '#F0634C',
            border: '2px solid #F0634C',
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',
            
            
        },
        "&.MuiButton-contained":{
            background: '#F0634C', 
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',
        }
    }

    

  return (
    <div>

        <MainContainer>

        <LeftSide>
            
            <img src={logo} alt="logo" className="logo"/>
            
        </LeftSide>

        <Middle>
            <HomeConatiner>
                <NavLink to='/'>
                    Home
                </NavLink>
            </HomeConatiner>
            <CourseContainer>
                <NavLink to='/courses'>
                    Courses
                </NavLink>
            </CourseContainer>
            <AboutContainer>
                <NavLink to='/About'>
                    About
                </NavLink>
            </AboutContainer>
        </Middle>

        <RightSide>
            
                <Stack spacing={2} direction="row">

                    <Button 
                    onClick={()=> navigate('/login')}
                    sx={btnStyles}
                    variant="outlined">Login</Button>

                </Stack>
            
            
                <Stack spacing={2} direction="row">

                    <Button
                    onClick={()=> navigate('/sign-up')}
                    sx={btnStyles}
                    variant="contained">Sign Up</Button>

                </Stack>
            
        </RightSide>

        </MainContainer>

    </div>
  )
}

export default NavbarHorizontal