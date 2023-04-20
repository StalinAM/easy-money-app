import styled from 'styled-components'
import Profile from '../components/Profile'
import Table from '../components/Table'
import Menu from '../components/Menu'
import MounthValues from '../components/MounthValues'
import { useState } from 'react'

function Dashboard({ arrayTransactions }) {
  const [activeMenu, setActiveMenu] = useState(false)
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const filteredTransactions = arrayTransactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date)
    return (
      transactionDate.getMonth() + 1 === currentMonth &&
      transactionDate.getFullYear() === currentYear
    )
  })
  return (
    <Container>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} row='1/5' />
      <Profile setActiveMenu={setActiveMenu} />
      <MounthValues />
      <Table
        arrayTransactions={filteredTransactions.slice(0, 9)}
        title='Ultimas transacciones'
        row='3/5'
      />
    </Container>
  )
}

export default Dashboard

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 2rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr 1fr 1fr;
  position: relative;
  @media screen and (max-width: 1440px) {
  }
  @media screen and (max-width: 1140px) {
    padding-left: 1rem;
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    height: auto;
    grid-template-rows: 70px 1fr max-content;
  }
`
