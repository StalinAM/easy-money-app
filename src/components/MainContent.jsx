import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import resumen from '../assets/resumen.webp'
import url from '../assets/background_home.svg'
function MainContent() {
  return (
    <SectionC>
      <Background url={url} />
      <Container>
        <Content>
          <h1>Toma el control de tus finanzas</h1>
          <p>
            Nuestra app web de finanzas personales, diseñada para simplificar la
            gestión del dinero, permite llevar un seguimiento rápido y fácil de
            los gastos y te ayuda a ahorrar
          </p>
          <ContainerBtn>
            <Button text='Iniciar sesión' link='/signin' />
            <Button text='Registrarse' link='/signup' />
          </ContainerBtn>
        </Content>
        <img src={resumen} alt='' />
      </Container>
    </SectionC>
  )
}

export default MainContent

const SectionC = styled.section`
  min-height: calc(100vh - 133px);
  position: relative;
  padding: 4rem 6rem 2rem;
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
  bottom: 0;
  left: 0;
  z-index: -1;
`
const Container = styled.article`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: #00000021 0px 1px 9px 0px;
  }
`
const Content = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-size: ${(props) => props.theme.xxlFont};
    color: ${(props) => props.theme.white};
  }
  p {
    font-size: ${(props) => props.theme.mFont};
    color: ${(props) => props.theme.white};
  }
`
const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`
