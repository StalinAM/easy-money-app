import React from 'react'
import styled from 'styled-components'
import Features from '../components/Features/Features'
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
    </>
  )
}

export default Home

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`
