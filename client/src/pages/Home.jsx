import React from 'react'
import styled from 'styled-components'
import AboutUs from '../components/AboutUs'
import CourseList from '../components/CourseList'
import HeroSection from "../components/HeroSection"
import Contact from "../components/Contact"
import NavbarHorizontal from '../components/NavbarHorizontal'

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
  return (
    <HomePageContainer>
      <NavbarHorizontal />
      <HeroSection/>
      <CourseList/>
      <AboutUs/>
      <Contact/>
    </HomePageContainer>
  )
}

export default Home
