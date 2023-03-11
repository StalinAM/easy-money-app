import React from 'react'
import styled from 'styled-components'
import HeaderHome from '../components/HeaderHome'
import MainContent from '../components/MainContent'

function Home() {
  return (
    <>
      <HeaderHome />
      <MainContainer>
        <MainContent />
      </MainContainer>
    </>
  )
}

export default Home

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  gap: 6rem;
  @media screen and (max-width: 1080px) {
    padding: 0 3rem;
    gap: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`
