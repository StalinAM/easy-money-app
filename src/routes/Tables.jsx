import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Table from '../components/Table'
import Transactions from '../components/Transactions'

function Tables() {
  const [active, setActive] = useState(false)
  return (
    <Container>
      <Menu row='1/3' />
      <ContainerBtn>
        <BtnModal onClick={() => setActive(!active)}>Crear nuevo</BtnModal>
      </ContainerBtn>
      <Transactions active={active} setActive={setActive} />
      <Table title='Transacciones' row='2/3' />
    </Container>
  )
}

export default Tables

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 4rem 6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr;
  background-color: ${(props) => props.theme.blue};
`
const ContainerBtn = styled.div`
  padding: 2rem 0;
`
const BtnModal = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.lightBlue};
  color: ${(props) => props.theme.white};
  box-shadow: #00000021 0px 1px 9px 0px;
  &:hover {
    border: 1px solid ${(props) => props.theme.white};
  }
`
