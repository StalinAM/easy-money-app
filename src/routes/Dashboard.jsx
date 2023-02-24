import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import { logoutUser } from '../firebase/services'
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 350px 1fr 1fr 1fr;
  grid-template-rows: 150px 1fr 1fr 1fr;
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
  grid-column: 2/5;
`
const ContainerTable = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 1.5rem;
  grid-column: 2/5;
  grid-row: 3/5;
  table {
    width: 100%;
    tr {
      display: grid;
      justify-items: start;
      grid-template-columns: 1fr 70% 1fr 1fr;
      border-bottom: 1px solid #000e33;
    }
  }
`
const TitleTable = styled.header`
  color: ${(props) => props.theme.darkBlue};
  padding: 0;
  font-size: ${(props) => props.theme.mFont};
`
const handleClick = () => {
  logoutUser()
}
function Dashboard() {
  return (
    <Container>
      <Menu>
        <img src={logo} alt='logo of easymoney' />
        <Button
          handleClick={handleClick}
          text='Cerrar sessión'
          link='/signin'
        />
      </Menu>
      <Navbar></Navbar>
      <ContainerTable>
        <TitleTable>Ultimas transacciones</TitleTable>
        <table>
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
              <td>12/12/23</td>
              <td>Carne</td>
              <td></td>
              <td>$10</td>
            </tr>
            <tr>
              <td>12/12/23</td>
              <td>servicios basicos</td>
              <td>$80</td>
              <td></td>
            </tr>
            <tr>
              <td>12/12/23</td>
              <td>Carne</td>
              <td></td>
              <td>$10</td>
            </tr>
          </tbody>
        </table>
      </ContainerTable>
    </Container>
  )
}

export default Dashboard
