import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { TransactionContext } from '../context/TransactionsContext'
import { deleteTransaction, updateTransaction } from '../firebase/services'
import FormTransaction from './FormTransaction'
import { deleteIcon, editIcon } from '../assets/icons/list-icons'

function RowTable({ date, description, income, expense, savings, docId }) {
  const { returnTransactions } = useContext(TransactionContext)
  const [active, setActive] = useState(false)
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()
  const { currentUser } = useContext(AuthContext)
  const [transaction, setTransaction] = useState({
    description,
    expense,
    income,
    savings
  })
  const newDate = () => {
    const fecha = new Date()
    const opciones = {
      timeZone: 'America/Guayaquil',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
    const fechaString =
      fecha
        .toLocaleDateString('es-EC', opciones)
        .replace(/\//g, '-')
        .split('-')
        .reverse()
        .join('-') + 'T00:00:00Z'
    return fechaString
  }
  const editTransaction = async () => {
    if (
      transaction.description &&
      (transaction.expense || transaction.income || transaction.savings)
    ) {
      const newTransaction = {
        uid: currentUser.uid,
        date: newDate(),
        ...transaction
      }
      await updateTransaction(docId, { ...newTransaction })
    }
    returnTransactions()
  }
  const updateTransactionSubmit = async (e) => {
    e.preventDefault()
    editTransaction()
    setActive(!active)
  }
  const removeTransaction = async () => {
    await deleteTransaction(docId)
    returnTransactions()
  }
  return (
    <>
      <td>{date.slice(0, 10).split('-').reverse().join('-')}</td>
      <td>{description}</td>
      <td>{income !== 0 && income !== '0' ? `$${income}` : ''}</td>
      <td>{expense !== 0 && expense !== '0' ? `$${expense}` : ''}</td>
      <td>
        {savings !== undefined && savings !== 0 && savings !== '0'
          ? `$${savings}`
          : ''}
      </td>

      {currentMonth === new Date(date).getMonth() + 1 &&
        currentYear === new Date(date).getFullYear() && (
          <Edit>
            <Icon onClick={() => setActive(!active)}>{editIcon}</Icon>
            <Icon onClick={removeTransaction}>{deleteIcon}</Icon>
          </Edit>
        )}

      {active && (
        <FormTransaction
          handleSubmit={updateTransactionSubmit}
          active={active}
          setActive={setActive}
          transaction={transaction}
          setTransaction={setTransaction}
        />
      )}
    </>
  )
}

export default RowTable

const Icon = styled.button`
  background: none;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.black_500};
    &:hover {
      color: red;
    }
  }
`
const Edit = styled.td`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
