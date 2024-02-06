import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { logoutUser } from '../firebase/services'
import { closeIcon } from '../assets/icons/list-icons'
function Menu({ activeMenu, setActiveMenu }) {
  const [active, setActive] = useState(0)
  const location = useLocation()
  const handleClick = () => {
    logoutUser()
  }
  const menuItems = [
    {
      title: 'Resumen',
      link: 'overview'
    },
    {
      title: 'Tablas',
      link: 'tables'
    },
    { title: 'Filtro', link: 'filter' }
  ]
  useEffect(() => {
    const path = location.pathname
    const index = menuItems.findIndex(
      (item) => item.link === path.split('/')[2]
    )
    setActive(index)
  }, [location.pathname])
  const handleItemClick = (index) => {
    setActive(index)
    setActiveMenu(false)
  }
  return (
    <Container activeMenu={activeMenu}>
      <div>
        <Header>
          <h1>EasyMoney</h1>
          <IconClose onClick={() => setActiveMenu(false)}>
            {closeIcon}
          </IconClose>
        </Header>
        <MenuRoutes>
          {menuItems.map((item, index) => (
            <LinlStyle key={index} to={item.link}>
              <Item
                active={active === index}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </Item>
            </LinlStyle>
          ))}
        </MenuRoutes>
      </div>
      <Button onClick={handleClick} to='/signin'>
        Cerrar sessión
      </Button>
    </Container>
  )
}

export default Menu

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.black_200};
  padding: 1.5rem 1rem;
  height: 100%;
  img {
    width: 13rem;
  }
  div {
    width: 100%;
  }
  @media screen and (max-width: 1140px) {
  }
  @media screen and (max-width: 768px) {
    transform: ${(props) =>
      props.activeMenu ? 'translateX(0)' : 'translateX(-100%)'};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    img {
      width: 11rem;
    }
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  h1 {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 1140px) {
    justify-content: space-between;
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
  padding: 0.5rem 0.75rem;
  color: ${(props) => (props.active ? 'white' : '#14121F')};
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#14121F' : 'none')};
  &:hover {
    color: ${(props) => props.theme.black_500};
    background-color: ${(props) => props.theme.black_400};
  }
`
const LinlStyle = styled(Link)`
  display: block;
  width: 100%;
`
const IconClose = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.black_500};
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Button = styled(Link)`
  padding: 0.56rem 1rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.black_500};
  color: ${(props) => props.theme.white};
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 3px ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
  }
  @media screen and (max-width: 768px) {
    padding: 0.56rem 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0.56rem 1.5rem;
  }
`
