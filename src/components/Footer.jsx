import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-symbol.svg'

function Footer() {
  return (
    <Container>
      <img src={logo} alt='' />
      <p>
        Desarrollado por{' '}
        <Creator href='https://github.com/StalinAM'>Stalin</Creator>
      </p>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 6rem;
  gap: 1rem;
  color: ${(props) => props.theme.black_500};
  img {
    width: 5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;
  }
`

const Creator = styled.a`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`
