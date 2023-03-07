import React from 'react'
import styled from 'styled-components'
import TotalInfo from '../components/TotalInfo'
import Profile from '../components/Profile'
import Table from '../components/Table'
import Menu from '../components/Menu'

function Dashboard() {
  return (
    <Container>
      <Menu />
      <Profile />
      <ContainerTotal>
        <TotalInfo icon='stack' title='Valor total' value='130' />
        <TotalInfo icon='withdraw' title='Ingreso' value='30' />
        <TotalInfo icon='insert' title='Egreso' value='200' />
        <TotalInfo icon='bill' title='Mes pasado' value='40' />
      </ContainerTotal>
      <Table />
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

const ContainerTotal = styled.div`
  padding-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
