import React from 'react'
import styled from 'styled-components'
import Button from './Button'
function MainContent() {
  return (
    <section>
      <article>
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
        <img src='' alt='' />
      </article>
    </section>
  )
}

export default MainContent

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
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`
