import React from 'react'
import styled from 'styled-components'
import HeaderHome from '../components/HeaderHome'
import MainContent from '../components/MainContent'

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 6rem;
  gap: 6rem;
`
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
