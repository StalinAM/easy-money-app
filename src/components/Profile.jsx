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
        {/* <ImgProfile>
          {currentUser.photoURL ? (
            <img src={currentUser.photoURL} alt='photo profile' />
          ) : (
            <Letter>{currentUser.displayName}</Letter>
          )}
        </ImgProfile> */}
      </div>
    </Navbar>
  )
}

export default Profile

const ImgProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: none;
  border: 2px solid ${(props) => props.theme.white};
`
const Letter = styled.span`
  font-size: ${(props) => props.theme.lFont};
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`
const Navbar = styled.nav`
  display: flex;
  grid-column: 2;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.darkLightBlue};
  border-radius: 12px;
  box-shadow: #00000021 0px 1px 9px 0px;
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
