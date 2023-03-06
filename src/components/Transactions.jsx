import React, { useContext, useState } from 'react'
import { insertNewTransaction } from '../firebase/services'
import { AuthContext } from '../context/Auth'
import { TransactionContext } from '../context/TransactionsContext'
import FormTransaction from './FormTransaction'

function Transactions({ active, setActive }) {
  const { currentUser } = useContext(AuthContext)
  const { returnTransactions } = useContext(TransactionContext)
  const [date, setDate] = useState(null)
  const [transaction, setTransaction] = useState({
    description: '',
    expense: 0,
    income: 0
  })

  const addTransaction = async () => {
    if (
      date &&
      transaction.description &&
      (transaction.expense || transaction.income)
    ) {
      const newTransaction = {
        uid: currentUser.uid,
        date,
        ...transaction
      }
      await insertNewTransaction({ ...newTransaction })
    }
    returnTransactions()
  }
  const insertTransaction = async (e) => {
    e.preventDefault()
    addTransaction()
    setActive(!active)
    setTransaction({ description: '', expense: '', income: '' })
  }
  return (
    <>
      {active && (
        <FormTransaction
          handleSubmit={insertTransaction}
          active={active}
          setActive={setActive}
          transaction={transaction}
          setTransaction={setTransaction}
          setDate={setDate}
        />
      )}
    </>
  )
}

export default Transactions
