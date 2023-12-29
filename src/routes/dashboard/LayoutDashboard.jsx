import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'
import styled from 'styled-components'

function LayoutDashboard({ activeMenu, setActiveMenu }) {
  return (
    <Container>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} row='1/5' />
      <Outlet />
    </Container>
  )
}

export default LayoutDashboard

const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    height: auto;
  }
`
