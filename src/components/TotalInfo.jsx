import React from 'react'
import styled from 'styled-components'

function TotalInfo({ color, icon, title, value, children }) {
  return (
    <Container color={color}>
      <Icon>{children}</Icon>
      <div>
        <p>{title}</p>
        <h2>${value}</h2>
      </div>
    </Container>
  )
}

export default TotalInfo

const Container = styled.article`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 16px;
  padding: 1rem;
  text-align: right;
  border: 2px solid ${(props) => props.theme.black_400};
  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${(props) => props.theme.black_500};
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
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
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.black_500};
  border-radius: 12px;
  svg {
    width: 50;
    height: 50;
  }
`
