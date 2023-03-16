import React from 'react'
import styled from 'styled-components'
import newtransactionImg from '../../assets/new_transaction.webp'

function NewTransaction() {
  return (
    <Container>
      <img src={newtransactionImg} alt='' />
      <Content>
        <h2>Agrega Transacciones de forma intuitiva</h2>
        <p>
          Con nuestra aplicación de gestión financiera, podrás agregar
          transacciones de forma instantánea y mantener un registro detallado y
          actualizado de tus ingresos y gastos en todo momento.
        </p>
        <p>¡El seguimiento de gastos nunca ha sido más sencillo!</p>
      </Content>
    </Container>
  )
}

export default NewTransaction

const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  img {
    max-width: 30rem;
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
