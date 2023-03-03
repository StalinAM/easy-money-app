import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import Transactions from './Transactions'

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
  justify-content: space-between;
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
const BtnModal = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.lightBlue};
  color: ${(props) => props.theme.white};
  &:hover {
    border: 1px solid ${(props) => props.theme.white};
  }
`
function Profile() {
  const { currentUser } = useContext(AuthContext)
  const [active, setActive] = useState(false)
  return (
    <Navbar>
      <BtnModal onClick={() => setActive(!active)}>Crear nuevo</BtnModal>
      <Transactions active={active} setActive={setActive} />
      <div>
        <h2>{currentUser.displayName}</h2>
        <ImgProfile />
      </div>
    </Navbar>
  )
}

export default Profile
