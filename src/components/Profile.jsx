import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'

function Profile() {
  const { currentUser } = useContext(AuthContext)

  return (
    <Navbar>
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
`
