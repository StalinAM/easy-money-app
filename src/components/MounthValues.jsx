import React, { useContext } from 'react'
import styled from 'styled-components'
import { TransactionContext } from '../context/TransactionsContext'
import TotalInfo from './TotalInfo'
import {
  expensesIcon,
  incomesIcon,
  savingsIcon,
  totalIcon
} from '../assets/icons/list-icons'

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
  const savings = filteredTransactions.reduce(
    (total, transaction) =>
      total + parseFloat(transaction.savings ? transaction.savings : 0),
    0
  )

  const total = incomes - expenses
  return (
    <ContainerTotal>
      <TotalInfo title='Saldo' value={total.toFixed(2)}>
        {totalIcon}
      </TotalInfo>
      <TotalInfo title='Ingresos' value={incomes.toFixed(2)}>
        {incomesIcon}
      </TotalInfo>
      <TotalInfo title='Gastos' value={expenses.toFixed(2)}>
        {expensesIcon}
      </TotalInfo>
      <TotalInfo title='Ahorros' value={savings.toFixed(2)}>
        {savingsIcon}
      </TotalInfo>
    </ContainerTotal>
  )
}

export default MounthValues

const ContainerTotal = styled.div`
  padding-top: 2.1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2.4rem;
`
