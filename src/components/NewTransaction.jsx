import React from 'react'
import newtransactionImg from '../../assets/form.webp'
import { Container, Content } from '../style/StyleComponents'

function NewTransaction() {
  return (
    <Container>
      <img src={newtransactionImg} alt='' />
      <Content>
        <h3>Agrega Transacciones de forma intuitiva</h3>
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
