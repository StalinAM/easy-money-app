import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

function HeaderHome() {
  return (
    <header>
      <Navbar>
        <Logo src={logo} alt='logo of easymoney' />
        <List>
          <Item>
            <a href='#features'>Características</a>
          </Item>
          <Item>
            <a href='#getstarted'>Empezar</a>
          </Item>
        </List>
      </Navbar>
    </header>
  )
}

export default HeaderHome

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 75rem;
`
const Logo = styled.img`
  width: 13rem;
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
