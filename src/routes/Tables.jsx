import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'

function Tables() {
  return (
    <Container>
      <Menu />
    </Container>
  )
}

export default Tables

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 4rem 6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.blue};
`
