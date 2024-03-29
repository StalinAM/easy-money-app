import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function GetStarted() {
  return (
    <SectionC id='getstarted'>
      <Container>
        <Title>
          Ingresa hoy,<span>¡y recupera el control de tu dinero!</span>
        </Title>
        <ContainerBtn>
          <Button text='Iniciar sesión' link='/signin' />
          <Button text='Registrarse' link='/signup' />
        </ContainerBtn>
      </Container>
    </SectionC>
  )
}

export default GetStarted

const SectionC = styled.section`
  position: relative;
  padding: 4rem 6rem 2rem;
  height: 50vh;
  display: flex;
  align-items: center;
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
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40rem;
    border-radius: 12px;
  }
`
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.xxlFont};
  font-weight: bold;
  color: ${(props) => props.theme.black_500};
  text-align: center;
  span {
    font-size: ${(props) => props.theme.lFont};
    font-weight: 300;
  }
`
const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;
  }
`
