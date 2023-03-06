import React, { useContext } from 'react'
import styled from 'styled-components'
import { TransactionContext } from '../context/TransactionsContext'
import { deleteTransaction } from '../firebase/services'

function RowTable({ date, description, income, expense, docId }) {
  const { returnTransactions } = useContext(TransactionContext)
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
        <Icon>
          <i className='uil uil-pen' />
        </Icon>
        <Icon onClick={removeTransaction}>
          <i className='uil uil-trash-alt' />
        </Icon>
      </td>
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
