import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Features from '../components/Features'
import GetStarted from '../components/GetStarted'
import HeaderHome from '../components/HeaderHome'
import MainContent from '../components/MainContent'

function Home() {
  return (
    <>
      <HeaderHome />
      <MainContainer>
        <MainContent />
        <Features />
        <GetStarted />
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`
