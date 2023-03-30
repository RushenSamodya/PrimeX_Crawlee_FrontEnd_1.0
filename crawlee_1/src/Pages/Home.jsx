import React from 'react'
import styled from 'styled-components'
import AboutUs from '../Components/AboutUs'
import Course from '../Components/Course'
import HeroSection from "../Components/HeroSection"
import Contact from "../Components/Contact"

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Home = () => {
  return (
    <HomePageContainer>
      <HeroSection/>
      <Course/>
      <AboutUs/>
      <Contact/>
    </HomePageContainer>
  )
}

export default Home
