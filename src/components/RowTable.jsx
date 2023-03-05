import React from 'react'

function RowTable({ date, description, income, expense }) {
  return (
    <>
      <td>{date}</td>
      <td>{description}</td>
      <td>{income != 0 ? `$${income}` : ''}</td>
      <td>{expense != 0 ? `$${expense}` : ''}</td>
    </>
  )
}

export default RowTable
