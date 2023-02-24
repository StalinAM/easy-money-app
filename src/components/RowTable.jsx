import React from 'react'

function RowTable({ fecha, description, ingreso = '', egreso = '' }) {
  return (
    <>
      <td>{fecha}</td>
      <td>{description}</td>
      <td>{ingreso}</td>
      <td>{egreso}</td>
    </>
  )
}

export default RowTable
