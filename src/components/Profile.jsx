import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'

function Profile({ setActiveMenu }) {
  const { currentUser } = useContext(AuthContext)

  return (
    <Navbar>
      <IconOpen onClick={() => setActiveMenu(true)} className='uil uil-bars' />
      <div>
        <h2>{currentUser.displayName}</h2>
        <ImgProfile />
      </div>
    </Navbar>
  )
}

export default Profile

const ImgProfile = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: black;
  border: 2px solid ${(props) => props.theme.white};
`
const Navbar = styled.nav`
  display: flex;
  grid-column: 2;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    align-items: center;
  }
  h2 {
    text-transform: capitalize;
    color: ${(props) => props.theme.white};
    margin-right: 1rem;
  }
  @media screen and (max-width: 1140px) {
    grid-column: auto;
    justify-content: space-between;
  }
`
const IconOpen = styled.i`
  display: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.xlFont};
  @media screen and (max-width: 1140px) {
    display: block;
  }
`
