import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { TransactionContext } from '../context/TransactionsContext'
import { deleteTransaction, updateTransaction } from '../firebase/services'
import FormTransaction from './FormTransaction'

function RowTable({ date, description, income, expense, savings, docId }) {
  const { returnTransactions } = useContext(TransactionContext)
  const [active, setActive] = useState(false)
  const currentMonth = new Date().getMonth() + 1
  const { currentUser } = useContext(AuthContext)
  const [transaction, setTransaction] = useState({
    description,
    expense,
    income,
    savings
  })
  const editTransaction = async () => {
    if (
      transaction.description &&
      (transaction.expense || transaction.income || transaction.savings)
    ) {
      const newTransaction = {
        uid: currentUser.uid,
        date: new Date().toISOString(),
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

      {currentMonth === new Date(date).getMonth() + 1 && (
        <td>
          <Icon onClick={() => setActive(!active)}>
            <i className='uil uil-pen' />
          </Icon>
          <Icon onClick={removeTransaction}>
            <i className='uil uil-trash-alt' />
          </Icon>
        </td>
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
  i {
    margin-right: 0.5rem;
    font-size: ${(props) => props.theme.mFont};
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`
