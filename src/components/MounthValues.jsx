import React, { useContext } from 'react'
import styled from 'styled-components'
import { TransactionContext } from '../context/TransactionsContext'
import TotalInfo from './TotalInfo'

function MounthValues() {
  const { arrayTransactions } = useContext(TransactionContext)
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const filteredTransactions = arrayTransactions.filter(
    (transaction) =>
      new Date(transaction.date).getMonth() + 1 === currentMonth &&
      new Date(transaction.date).getFullYear() === currentYear
  )

  const expenses = filteredTransactions.reduce(
    (total, transaction) =>
      total + parseFloat(transaction.expense ? transaction.expense : 0),
    0
  )

  const incomes = filteredTransactions.reduce(
    (total, transaction) =>
      total + parseFloat(transaction.income ? transaction.income : 0),
    0
  )

  const total = incomes - expenses
  return (
    <ContainerTotal>
      <TotalInfo color='#000e33' icon='stack' title='Saldo' value={total} />
      <TotalInfo
        color='#4CAF50'
        icon='withdraw'
        title='Ingresos'
        value={incomes}
      />
      <TotalInfo
        color='#F44334'
        icon='insert'
        title='Gastos'
        value={expenses}
      />
    </ContainerTotal>
  )
}

export default MounthValues

const ContainerTotal = styled.div`
  padding-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2rem;
`
