import React, { createContext, useContext, useEffect, useState } from 'react'
import { fetchTransactions } from '../firebase/services'
import { AuthContext } from './Auth'
export const TransactionContext = createContext()

function TransactionsContext({ children }) {
  const { currentUser } = useContext(AuthContext)
  const [arrayTransactions, setArrayTransactions] = useState([])
  useEffect(() => {
    returnTransactions()
  }, [currentUser])
  const returnTransactions = async () => {
    const asyncTransactions = await fetchTransactions(currentUser.uid)
    setArrayTransactions([...asyncTransactions])
  }
  return (
    <TransactionContext.Provider
      value={{ arrayTransactions, returnTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export default TransactionsContext
