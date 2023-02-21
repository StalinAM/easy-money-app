import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 350px 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.blue};
`
const Menu = styled.aside`
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 1.5rem 1rem;
  img {
    margin: 0 auto;
    width: 15rem;
    filter: invert(22%) sepia(59%) saturate(4758%) hue-rotate(213deg)
      brightness(105%) contrast(103%);
  }
`
const Navbar = styled.nav`
  grid-column: 2/5;
`
function Dashboard() {
  return (
    <Container>
      <Menu>
        <img src={logo} alt='logo of easymoney' />
      </Menu>
      <Navbar></Navbar>
    </Container>
  )
}

export default Dashboard
