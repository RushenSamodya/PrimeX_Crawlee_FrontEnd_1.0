import React, { useContext } from "react";
import {useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../assets/crawleeimg.png";
import { LeftSide, LoginBtn, LogoutBtn, MainContainer, Middle, StyledNavLink, RightSide, btnStyles } from "../styles/componentStyles/NavbarHorizontalStyles";
import { AuthContext } from "../context/AuthContext";
import { StyledLink } from "../pages/AllCourses";


function NavbarHorizontal() {
  const navigate = useNavigate();

  const { user,dispatch } = useContext(AuthContext);

  return (
    <div>
      <MainContainer>
        <LeftSide>
        <StyledLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </StyledLink>
          
        </LeftSide>

        <Middle>
          <StyledNavLink to="/">Home</StyledNavLink>

          <StyledNavLink to="/all-courses">Courses</StyledNavLink>

          <StyledNavLink to="/about">About</StyledNavLink>
        </Middle>

        <RightSide>
          {user ? (
            <>
              <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
              <LoginBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => {dispatch({ type: "LOGOUT" });}}
                    sx={btnStyles}
                    variant="outlined"
                  >
                    Logout
                  </Button>
                </Stack>
              </LoginBtn>
            </>
          ) : (
            <>
              <LoginBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => navigate("/login")}
                    sx={btnStyles}
                    variant="outlined"
                  >
                    Login
                  </Button>
                </Stack>
              </LoginBtn>

              <LogoutBtn>
                <Stack spacing={2} direction="row">
                  <Button
                    onClick={() => navigate("/signup")}
                    sx={btnStyles}
                    variant="contained"
                  >
                    Sign Up
                  </Button>
                </Stack>
              </LogoutBtn>
            </>
          )}
        </RightSide>
      </MainContainer>
    </div>
  );
}

export default NavbarHorizontal;
