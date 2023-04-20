import React, { useState } from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Table from '../components/Table'
import Transactions from '../components/Transactions'
import { groupTransactionsByMonth } from '../components/groupsFunction'

function Tables({ arrayTransactions }) {
  const [active, setActive] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)
  const groups = groupTransactionsByMonth(arrayTransactions)
  const months = Object.keys(groups)
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)

  function goToPreviousMonth() {
    setCurrentMonthIndex(Math.max(currentMonthIndex - 1, 0))
  }

  function goToNextMonth() {
    setCurrentMonthIndex(Math.min(currentMonthIndex + 1, months.length - 1))
  }

  const currentMonth = months[currentMonthIndex]
  const transactionsForCurrentMonth = groups[currentMonth]
  return (
    <Container>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} row='1/4' />
      <ContainerBtn>
        <IconOpen
          onClick={() => setActiveMenu(true)}
          className='uil uil-bars'
        />
        <h2>{currentMonth}</h2>
        <BtnModal onClick={() => setActive(!active)}>Crear nueva</BtnModal>
      </ContainerBtn>
      <Transactions active={active} setActive={setActive} />
      <Table
        arrayTransactions={transactionsForCurrentMonth}
        title='Transacciones'
        row='2/3'
      />
      <Pagination>
        <div>
          {currentMonthIndex != months.length - 1 && (
            <BtnPage onClick={goToNextMonth}>
              <i className='uil uil-angle-left' />
            </BtnPage>
          )}
        </div>
        <div>
          {currentMonthIndex != 0 && (
            <BtnPage onClick={goToPreviousMonth}>
              <i className='uil uil-angle-right' />
            </BtnPage>
          )}
        </div>
      </Pagination>
    </Container>
  )
}

export default Tables

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 1rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr 65px;
  position: relative;
  @media screen and (max-width: 1140px) {
    padding-left: 1rem;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  }
`
const ContainerBtn = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 0 0;
  border-radius: 12px;
  h2 {
    text-transform: capitalize;
    color: ${(props) => props.theme.black_500};
  }
`
const BtnModal = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: ${(props) => props.theme.mFont};
  background-color: ${(props) => props.theme.black_500};
  color: ${(props) => props.theme.white};
  box-shadow: #00000021 0px 1px 9px 0px;
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 4px ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
  }
`
const Pagination = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 1rem;
  div {
    width: 40px;
  }
`
const BtnPage = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.black_500};
  i {
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.lFont};
  }
`
const IconOpen = styled.i`
  display: none;
  cursor: pointer;
  color: ${(props) => props.theme.black_500};
  font-size: ${(props) => props.theme.xlFont};
  @media screen and (max-width: 1140px) {
    display: block;
  }
`
