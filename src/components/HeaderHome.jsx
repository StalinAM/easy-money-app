import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

function HeaderHome() {
  const [active, setActive] = useState(false)
  return (
    <header>
      <Navbar>
        <Logo src={logo} alt='logo of easymoney' />
        <IconOpen onClick={() => setActive(true)} className='uil uil-bars' />
        <List active={active}>
          <IconClose
            onClick={() => setActive(false)}
            className='uil uil-times'
          />
          <Item onClick={() => setActive(false)}>
            <a href='#features'>Características</a>
          </Item>
          <Item onClick={() => setActive(false)}>
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
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    transform: ${(props) =>
      props.active ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    height: 100vh;
    right: 0;
    top: 0;
    z-index: 100;
    transition: transform 0.5s ease-in-out;
    background-color: ${(props) => props.theme.lightBlue};
    flex-direction: column;
    justify-content: center;
    width: min(75vw, 300px);
  }
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
const IconClose = styled.i`
  display: none;
  color: ${(props) => props.theme.white};
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    display: block;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }
`
const IconOpen = styled.i`
  display: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.xlFont};
  @media screen and (max-width: 768px) {
    display: block;
  }
`
