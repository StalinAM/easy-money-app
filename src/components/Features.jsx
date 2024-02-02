import React from 'react'
import styled from 'styled-components'
import Login from './Login'
import NewTransaction from './NewTransaction'
import View from './View'

function Features() {
  return (
    <SectionC id='features'>
      <Login />
      <View />
      <NewTransaction />
    </SectionC>
  )
}

export default Features

export const SectionC = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  position: relative;
  padding: 4rem 6rem 2rem;
  min-height: 100vh;
  @media screen and (max-width: 1080px) {
    padding: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    gap: 5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
