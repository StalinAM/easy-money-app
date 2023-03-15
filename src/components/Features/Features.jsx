import React from 'react'
import styled from 'styled-components'
import backgroundTop from '../../assets/background_features.svg'
import backgroundBot from '../../assets/background_features_bot.svg'
import Login from './Login'
import NewTransaction from './NewTransaction'
import View from './View'

function Features() {
  return (
    <SectionC id='features'>
      <Background url={backgroundTop} />
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
  gap: 9rem;
  position: relative;
  padding: 4rem 6rem 2rem;
  min-height: 100vh;
  @media screen and (max-width: 1080px) {
    padding: 3rem 3rem 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem 1.5rem 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem 1rem 2rem;
  }
`
const Background = styled.div`
  position: absolute;
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
`
