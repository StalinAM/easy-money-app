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
  border-radius: 12px;
  padding: 3rem 1.5rem 1rem;
  text-align: right;
  box-shadow: #00000021 0px 1px 9px 0px;
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${(props) => props.color};
  }
  p {
    color: ${(props) => props.color};
    font-weight: bold;
  }
`
const Icon = styled.i`
  position: absolute;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkLightBlue};
  padding: 0.938rem 1.563rem;
  font-size: 2.5rem;
  border-radius: 12px;
  top: 0;
  left: 1.5rem;
  transform: translateY(-50%);
  box-shadow: #00000021 0px 1px 9px 0px;
`
