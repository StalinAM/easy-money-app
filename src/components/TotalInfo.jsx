import React from 'react'
import styled from 'styled-components'

function TotalInfo({ color, icon, title, value }) {
  return (
    <Container color={color}>
      <Icon color={color} className={`uil uil-money-${icon}`} />
      <p>{title}</p>
      <h2>${value}</h2>
    </Container>
  )
}

export default TotalInfo

const Container = styled.article`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 16px;
  padding: 3rem 1.5rem 1rem;
  text-align: right;
  border: 2px solid ${(props) => props.theme.black_400};
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.black_500};
  }
  p {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme.black_400};
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 1rem 0.5rem;
  }
`
const Icon = styled.i`
  position: absolute;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black_500};
  padding: 0.938rem 1.563rem;
  font-size: 2.5rem;
  border-radius: 12px;
  top: 0;
  left: 1.5rem;
  transform: translateY(-50%);
  @media screen and (max-width: 480px) {
    padding: 0.313rem 0.938rem;
  }
`
