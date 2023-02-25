import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'

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
  h2 {
    text-transform: capitalize;
    color: ${(props) => props.theme.white};
  }
`
function Profile() {
  const { currentUser } = useContext(AuthContext)
  return (
    <Navbar>
      <h2>{currentUser.displayName}</h2>
      <ImgProfile />
    </Navbar>
  )
}

export default Profile
