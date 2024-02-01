import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '../../components/Table'
import Transactions from '../../components/Transactions'
import { arrowIcon } from '../../assets/icons/list-icons'
import { groupTransactionsByMonth } from '../../components/groupsFunction'
import { BtnOpen } from '../../style/StyleComponents'
import { burgerIcon } from '../../assets/icons/list-icons'

function DashboardTables({ arrayTransactions, setActiveMenu }) {
  const [active, setActive] = useState(false)
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
      <ContainerBtn>
        <BtnOpen onClick={() => setActiveMenu(true)}>{burgerIcon}</BtnOpen>
        <h2>{currentMonth}</h2>
        <BtnModal onClick={() => setActive(!active)}>Crear nueva</BtnModal>
      </ContainerBtn>
      <Transactions active={active} setActive={setActive} />
      <Separator>
        <Table
          arrayTransactions={transactionsForCurrentMonth}
          title='Transacciones'
          row='2/3'
        />
        <Pagination>
          <div>
            {currentMonthIndex != months.length - 1 && (
              <BtnPage position='right' onClick={goToNextMonth}>
                {arrowIcon}
              </BtnPage>
            )}
          </div>
          <div>
            {currentMonthIndex != 0 && (
              <BtnPage position='left' onClick={goToPreviousMonth}>
                {arrowIcon}
              </BtnPage>
            )}
          </div>
        </Pagination>
      </Separator>
    </Container>
  )
}

export default DashboardTables

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem;
  position: relative;
  @media screen and (max-width: 1140px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 768px) {
  }
`
const Separator = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`
const ContainerBtn = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0 0 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.black_500};
  font-size: ${(props) => props.theme.lFont};
  color: ${(props) => props.theme.white};
  &:hover {
    border: 3px solid ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
    background-color: transparent;
  }
  svg {
    transform: ${(props) =>
      props.position === 'left' ? 'rotateY(180deg)' : ''};
  }
`
