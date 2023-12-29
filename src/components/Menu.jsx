import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { logoutUser } from '../firebase/services'
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
          <IconClose
            onClick={() => setActiveMenu(false)}
            className='uil uil-times'
          />
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
      <Button handleClick={handleClick} text='Cerrar sessión' link='/signin' />
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
    width: 15rem;
  }
  div {
    width: 100%;
  }
  @media screen and (max-width: 1140px) {
    transform: ${(props) =>
      props.activeMenu ? 'translateX(0)' : 'translateX(-100%)'};
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
  @media screen and (max-width: 768px) {
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
    font-size: ${(props) => props.theme.xlFont};
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
const IconClose = styled.i`
  display: none;
  color: ${(props) => props.theme.black_500};
  font-size: 2rem;
  cursor: pointer;
  @media screen and (max-width: 1140px) {
    display: block;
  }
`
