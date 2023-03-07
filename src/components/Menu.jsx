import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import { logoutUser } from '../firebase/services'
function Menu() {
  const handleClick = () => {
    logoutUser()
  }
  return (
    <Container>
      <div>
        <img src={logo} alt='logo of easymoney' />
        <br />
        <MenuRoutes>
          <li>
            <Link to='/dashboard'>General</Link>
          </li>
          <li>
            <Link to='/tables'>Tables</Link>
          </li>
        </MenuRoutes>
      </div>
      <Button handleClick={handleClick} text='Cerrar sessión' link='/signin' />
    </Container>
  )
}

export default Menu

const Container = styled.aside`
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
const MenuRoutes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`
