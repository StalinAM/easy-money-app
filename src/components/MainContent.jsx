import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import resumen from '../assets/resumen.webp'
function MainContent() {
  return (
    <SectionC>
      <Container>
        <Content>
          <h2>Toma el control de tus finanzas</h2>
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
  position: relative;
  padding: 4rem 6rem;
  @media screen and (max-width: 1080px) {
    padding: 3rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40rem;
    border-radius: 12px;
    border: 2px solid ${(props) => props.theme.black_500};
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`
const Content = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-size: ${(props) => props.theme.xxlFont};
    color: ${(props) => props.theme.black_500};
  }
  p {
    font-size: ${(props) => props.theme.mFont};
    color: ${(props) => props.theme.black_500};
    font-weight: 300;
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
