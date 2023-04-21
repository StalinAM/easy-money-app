import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'

function HeaderHome() {
  const [active, setActive] = useState(false)
  return (
    <Container>
      <Navbar>
        <h1>EasyMoney</h1>
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
    </Container>
  )
}

export default HeaderHome
const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  padding: 1rem 4rem;
  box-shadow: #00000021 0px 1px 9px 0px;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 75rem;

  h1 {
    font-size: ${(props) => props.theme.xlFont};
    font-weight: bold;
  }
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
    background-color: ${(props) => props.theme.black_200};
    flex-direction: column;
    justify-content: center;
    width: min(75vw, 300px);
  }
`
const Item = styled.li`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.theme.mFont};
  font-weight: bold;
  color: ${(props) => props.theme.black_500};
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.black_500};
    bottom: -6px;
    transition: 0.3s;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
const IconClose = styled.i`
  display: none;
  color: ${(props) => props.theme.black_500};
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    display: block;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
  }
  @media screen and (max-width: 480px) {
    top: 0.5rem;
    right: 0.6rem;
  }
`
const IconOpen = styled.i`
  display: none;
  cursor: pointer;
  color: ${(props) => props.theme.black_500};
  font-size: ${(props) => props.theme.xlFont};
  @media screen and (max-width: 768px) {
    display: block;
  }
`
