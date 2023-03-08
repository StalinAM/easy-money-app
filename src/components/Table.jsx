import { useContext } from 'react'
import styled from 'styled-components'
import { TransactionContext } from '../context/TransactionsContext'
import RowTable from './RowTable'

function Table({ row, title }) {
  const { arrayTransactions } = useContext(TransactionContext)
  return (
    <ContainerTable row={row}>
      <TitleTable>{title}</TitleTable>
      <BodyTable>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Ingreso</th>
            <th>Egreso</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {arrayTransactions
            .sort((a, b) => {
              const dateA = new Date(a.date)
              const dateB = new Date(b.date)
              return dateB - dateA
            })
            .map((item) => (
              <tr key={item.docId}>
                <RowTable
                  date={item.date}
                  description={item.description}
                  income={item.income}
                  expense={item.expense}
                  docId={item.docId}
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
  grid-row: ${(props) => props.row};
  box-shadow: #00000021 0px 1px 9px 0px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.xLightBlue}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
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
    grid-template-columns: 1fr 50% 1fr 1fr 1fr;
    border-bottom: 2px solid ${(props) => props.theme.xLightBlue};
    align-items: center;
    text-transform: capitalize;
    td {
      padding: 0.5rem 0.25rem;
    }
  }
`
