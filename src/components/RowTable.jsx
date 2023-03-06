import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { TransactionContext } from '../context/TransactionsContext'
import { deleteTransaction, updateTransaction } from '../firebase/services'
import FormTransaction from './FormTransaction'
import Transactions from './Transactions'

function RowTable({ date, description, income, expense, docId }) {
  const { returnTransactions } = useContext(TransactionContext)
  const [active, setActive] = useState(false)

  const { currentUser } = useContext(AuthContext)
  const [dateForm, setDateForm] = useState(null)
  const [transaction, setTransaction] = useState({
    description: '',
    expense: 0,
    income: 0
  })
  const editTransaction = async () => {
    if (
      dateForm &&
      transaction.description &&
      (transaction.expense || transaction.income)
    ) {
      const newTransaction = {
        uid: currentUser.uid,
        date: dateForm,
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
      <td>{date}</td>
      <td>{description}</td>
      <td>{income != 0 ? `$${income}` : ''}</td>
      <td>{expense != 0 ? `$${expense}` : ''}</td>
      <td>
        <Icon onClick={() => setActive(!active)}>
          <i className='uil uil-pen' />
        </Icon>
        <Icon onClick={removeTransaction}>
          <i className='uil uil-trash-alt' />
        </Icon>
      </td>
      {active && (
        <FormTransaction
          handleSubmit={updateTransactionSubmit}
          active={active}
          setActive={setActive}
          transaction={transaction}
          setTransaction={setTransaction}
          setDate={setDateForm}
        />
      )}
    </>
  )
}

export default RowTable

const Icon = styled.button`
  background: none;
  i {
    margin-right: 1rem;
    font-size: ${(props) => props.theme.mFont};
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`
