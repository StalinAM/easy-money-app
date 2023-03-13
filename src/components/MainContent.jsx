import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import resumen from '../assets/resumen.webp'
function MainContent() {
  return (
    <section>
      <Container>
        <Content>
          <h1>Recupera el poder sobre tus finanzas</h1>
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
    </section>
  )
}

export default MainContent

const Container = styled.article`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap-reverse;
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
