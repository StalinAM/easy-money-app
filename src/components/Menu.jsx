import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from '../components/Button'
import { logoutUser } from '../firebase/services'
function Menu({ row }) {
  const [active, setActive] = useState(0)
  const location = useLocation()
  const handleClick = () => {
    logoutUser()
  }
  const menuItems = [
    {
      title: 'Resumen',
      link: '/dashboard'
    },
    {
      title: 'Tablas',
      link: '/tables'
    }
  ]
  useEffect(() => {
    const path = location.pathname
    const index = menuItems.findIndex((item) => item.link === path)
    setActive(index)
  }, [location.pathname])
  const handleItemClick = (index) => {
    setActive(index)
  }
  return (
    <Container row={row}>
      <div>
        <img src={logo} alt='logo of easymoney' />
        <br />
        <MenuRoutes>
          {menuItems.map((item, index) => (
            <LinlStyle key={index} to={item.link}>
              <Item active={active === index} onClick={handleItemClick}>
                {item.title}
              </Item>
            </LinlStyle>
          ))}
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
  grid-row: ${(props) => props.row};
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`
const Item = styled.li`
  width: 100%;
  font-size: ${(props) => props.theme.mFont};
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.white};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#0033bb' : 'none')};
  /* border: 2px solid white; */
  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
  }
`
const LinlStyle = styled(Link)`
  display: block;
  width: 100%;
`
