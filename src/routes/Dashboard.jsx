import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import TotalInfo from '../components/TotalInfo'
import { logoutUser } from '../firebase/services'
import Profile from '../components/Profile'
import Table from '../components/Table'

function Dashboard() {
  const handleClick = () => {
    logoutUser()
  }
  return (
    <Container>
      <Menu>
        <div>
          <img src={logo} alt='logo of easymoney' />
          <br />
          <MenuRoutes>
            <li>General</li>
            <li>Tablas</li>
          </MenuRoutes>
        </div>
        <Button
          handleClick={handleClick}
          text='Cerrar sessión'
          link='/signin'
        />
      </Menu>
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
  grid-template-rows: 100px 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.blue};
`
const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row: 1/5;
  align-items: center;
  background-color: ${(props) => props.theme.darkLightBlue};
  border-radius: 12px;
  padding: 1.5rem 1rem;
  box-shadow: #00000021 0px 1px 9px 0px;
  img {
    width: 15rem;
  }
`

const ContainerTotal = styled.div`
  padding-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

const MenuRoutes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
