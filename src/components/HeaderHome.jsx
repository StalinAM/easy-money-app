import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 65rem;
`
const Logo = styled.img`
  width: 13rem;
  filter: invert(91%) sepia(13%) saturate(263%) hue-rotate(181deg)
    brightness(96%) contrast(101%);
`
const List = styled.ul`
  display: flex;
  gap: 1.5rem;
`
const Item = styled.li`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.mFont};
  color: ${(props) => props.theme.white};
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.white};
    bottom: -10px;
    transition: 0.3s;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`

function HeaderHome() {
  return (
    <header>
      <Navbar>
        <Logo src={logo} alt='logo of easymoney' />
        <List>
          <Item>
            <a href=''>Características</a>
          </Item>
          <Item>
            <a href=''>Empezar</a>
          </Item>
        </List>
      </Navbar>
    </header>
  )
}

export default HeaderHome
