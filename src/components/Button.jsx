import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Button({ text, link, handleClick = () => {} }) {
  return (
    <Btn onClick={handleClick} to={link}>
      {text}
    </Btn>
  )
}

export default Button

const Btn = styled(Link)`
  padding: 0.56rem 2rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.black_500};
  color: ${(props) => props.theme.white};
  transition: all 0.3s ease;
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 3px ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
  }
  @media screen and (max-width: 768px) {
    padding: 0.56rem 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0.56rem 1.5rem;
  }
`
