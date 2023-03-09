import React, { useContext } from 'react'
import styled from 'styled-components'
import Profile from '../components/Profile'
import Table from '../components/Table'
import Menu from '../components/Menu'
import MounthValues from '../components/MounthValues'

function Dashboard() {
  return (
    <Container>
      <Menu row='1/5' />
      <Profile />
      <MounthValues />
      <Table title='Ultimas transacciones' row='3/5' />
    </Container>
  )
}

export default Dashboard

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
