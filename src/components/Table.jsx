import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { fetchTransactions } from '../firebase/services'
import RowTable from './RowTable'

function Table() {
  const { currentUser } = useContext(AuthContext)
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    returnTransactions()
  }, [])
  const returnTransactions = async () => {
    const asyncTransactions = await fetchTransactions(currentUser.uid)
    setTransactions([...asyncTransactions])
  }

  return (
    <ContainerTable>
      <TitleTable>Ultimas transacciones</TitleTable>
      <BodyTable>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Ingreso</th>
            <th>Egreso</th>
          </tr>
        </thead>
        <tbody>
          {transactions
            .sort((a, b) => {
              const dateA = new Date(a.date.split('-').reverse().join('/'))
              const dateB = new Date(b.date.split('-').reverse().join('/'))
              return dateB - dateA
            })
            .map((item) => (
              <tr key={item.docId}>
                <RowTable
                  date={item.date}
                  description={item.description}
                  income={item.income}
                  expense={item.expense}
                />
              </tr>
            ))}
        </tbody>
      </BodyTable>
    </ContainerTable>
  )
}

export default Table

const ContainerTable = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 12px;
  padding: 1.5rem;
  grid-column: 2;
  grid-row: 3/5;
  box-shadow: #00000021 0px 1px 9px 0px;
`
const TitleTable = styled.header`
  color: ${(props) => props.theme.darkBlue};
  padding: 0;
  font-size: ${(props) => props.theme.mFont};
  margin-bottom: 1rem;
`
const BodyTable = styled.table`
  width: 100%;
  thead > tr {
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.xsFont};
    color: ${(props) => props.theme.gray};
  }
  tr {
    display: grid;
    justify-items: start;
    grid-template-columns: 1fr 60% 1fr 1fr;
    border-bottom: 2px solid ${(props) => props.theme.xLightBlue};
    td {
      padding: 0.5rem 0.25rem;
    }
  }
`
