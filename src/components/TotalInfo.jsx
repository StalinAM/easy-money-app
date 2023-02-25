import React from 'react'
import styled from 'styled-components'
const Container = styled.article`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 2.5rem 1.5rem;
  text-align: right;
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.darkBlue};
  }
`
const Icon = styled.i`
  position: absolute;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.theme.white};
  padding: 0.938rem 1.563rem;
  font-size: 2.5rem;
  border-radius: 12px;
  top: 0;
  left: 1.5rem;
  transform: translateY(-50%);
`
function TotalInfo({ icon, color, title, value }) {
  return (
    <Container>
      <Icon color={color} className={`uil uil-money-${icon}`} />
      <p>{title}</p>
      <h2>${value}</h2>
    </Container>
  )
}

export default TotalInfo
