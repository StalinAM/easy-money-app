import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import RowTable from '../components/RowTable'
import TotalInfo from '../components/TotalInfo'
import { logoutUser } from '../firebase/services'
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
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
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 1.5rem 1rem;
  img {
    width: 15rem;
    filter: invert(22%) sepia(59%) saturate(4758%) hue-rotate(213deg)
      brightness(105%) contrast(103%);
  }
`
const Navbar = styled.nav`
  grid-column: 2;
`
const ContainerTable = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 1.5rem;
  grid-column: 2;
  grid-row: 3/5;
`
const TitleTable = styled.header`
  color: ${(props) => props.theme.darkBlue};
  padding: 0;
  font-size: ${(props) => props.theme.mFont};
  margin-bottom: 1rem;
`
const Table = styled.table`
  width: 100%;
  thead > tr {
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.xsFont};
    color: #000e3361;
  }
  tr {
    display: grid;
    justify-items: start;
    grid-template-columns: 1fr 60% 1fr 1fr;
    border-bottom: 1px solid #000e3328;
    td {
      padding: 0.5rem 0.25rem;
    }
  }
`
const ContainerTotal = styled.div`
  padding-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
const handleClick = () => {
  logoutUser()
}
function Dashboard() {
  return (
    <Container>
      <Menu>
        <div>
          <img src={logo} alt='logo of easymoney' />
          <br />
          <ul>
            <li>General</li>
          </ul>
        </div>
        <Button
          handleClick={handleClick}
          text='Cerrar sessión'
          link='/signin'
        />
      </Menu>
      <Navbar></Navbar>
      <ContainerTotal>
        <TotalInfo
          icon='stack'
          color='#000e33'
          title='Valor total'
          value='130'
        />
        <TotalInfo icon='withdraw' color='#429c47' title='Ingreso' value='30' />
        <TotalInfo icon='insert' color='#c20f00' title='Egreso' value='200' />
        <TotalInfo icon='bill' color='#000e33' title='Mes pasado' value='40' />
      </ContainerTotal>
      <ContainerTable>
        <TitleTable>Ultimas transacciones</TitleTable>
        <Table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Ingreso</th>
              <th>Egreso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <RowTable fecha='03/12/2023' description='Carne' ingreso='$10' />
            </tr>
            <tr>
              <RowTable
                fecha='03/12/2023'
                description='Almuerzo'
                egreso='$20'
              />
            </tr>
            <tr>
              <RowTable
                fecha='03/12/2023'
                description='Servicio Basicos'
                egreso='$100'
              />
            </tr>
          </tbody>
        </Table>
      </ContainerTable>
    </Container>
  )
}

export default Dashboard
