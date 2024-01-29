import React from 'react'
import styled from 'styled-components'

function Filter() {
  return <Container>Filter</Container>
}

export default Filter
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem;
  position: relative;
  @media screen and (max-width: 1140px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`
