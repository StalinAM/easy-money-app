import React from 'react'
import styled from 'styled-components'
import table from '../../assets/table.webp'

function View() {
  return (
    <Container>
      <Content>
        <h2>Visualización clara y transparente del estado financiero</h2>
        <p>
          Esta funcionalidad te permitirá planificar y administrar de manera más
          efectiva tus recursos económicos, evitando el olvido o la pérdida de
          información importante.
        </p>
        <p>
          Nuestra aplicación te brinda una visualización clara y transparente de
          tu estado financiero, lo que te ayudará a tomar decisiones más
          informadas en cuanto al manejo de tus finanzas.
        </p>
      </Content>
      <img src={table} alt='' />
    </Container>
  )
}

export default View

const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: #00000021 0px 1px 9px 0px;
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
    font-size: ${(props) => props.theme.xlFont};
    color: ${(props) => props.theme.darkBlue};
  }
  p {
    font-size: ${(props) => props.theme.mFont};
    color: ${(props) => props.theme.white};
  }
`
