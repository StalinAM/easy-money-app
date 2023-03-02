import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Btn = styled(Link)`
  padding: 0.56rem 2.5rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.lightBlue};
  color: ${(props) => props.theme.white};
  transition: all 0.3s ease;
  &:hover {
    background: none;
    box-shadow: ${(props) => props.theme.white} 0px 0px 0px 3px;
  }
`
function Button({ text, link, handleClick = () => {} }) {
  return (
    <Btn onClick={handleClick} to={link}>
      {text}
    </Btn>
  )
}

export default Button
