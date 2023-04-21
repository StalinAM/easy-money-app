import React from 'react'
import table from '../../assets/tables.webp'
import { Container, Content } from '../../style/StyleComponents'
function View() {
  return (
    <Container>
      <Content>
        <h3>Visualización clara y transparente del estado financiero</h3>
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
