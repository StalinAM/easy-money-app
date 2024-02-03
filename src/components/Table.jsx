import styled from 'styled-components'
import RowTable from './RowTable'

function Table({ row, title, arrayTransactions }) {
  return (
    <Container row={row}>
      <TitleTable>{title}</TitleTable>
      <ContainerTable title={title}>
        <BodyTable>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripción</th>
              <th>Ingreso</th>
              <th>Egreso</th>
              <th>Ahorro</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {arrayTransactions ? (
              arrayTransactions.map((item) => (
                <tr key={item.docId}>
                  <RowTable
                    date={item.date}
                    description={item.description}
                    income={item.income}
                    expense={item.expense}
                    savings={item.savings}
                    docId={item.docId}
                  />
                </tr>
              ))
            ) : (
              <tr>
                <td>No hay transacciones</td>
              </tr>
            )}
          </tbody>
        </BodyTable>
      </ContainerTable>
    </Container>
  )
}

export default Table

const Container = styled.div`
  grid-row: ${(props) => props.row};
  grid-column: 2;
  overflow: hidden;
  @media screen and (max-width: 1140px) {
    grid-column: 1;
  }
`
const ContainerTable = styled.div`
  height: ${(props) =>
    props.title !== 'Transacciones'
      ? 'calc(100% - 83px)'
      : 'calc(100% - 68px)'};
  overflow-y: scroll;
  background-color: ${(props) => props.theme.white};
  border-radius: 0 0 16px 16px;
  padding: 1rem 1.5rem;
  border-top: 0;
  border-left: 2px;
  border-right: 2px;
  border-bottom: 2px;
  border-style: solid;
  border-color: ${(props) => props.theme.black_400};
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none; /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme.black_500}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
  @media screen and (max-width: 1140px) {
    grid-column: auto;
  }
  @media screen and (max-width: 768px) {
    height: max-content;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
const TitleTable = styled.header`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.black_500};
  padding: 1rem 1.5rem;
  border-radius: 16px 16px 0 0;
  font-size: ${(props) => props.theme.mFont};
`
const BodyTable = styled.table`
  width: 100%;
  thead > tr {
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-size: 14px;
    color: ${(props) => props.theme.black_400};
  }
  tr {
    display: grid;
    justify-items: start;
    grid-template-columns:
      100px minmax(max-content, 60%) minmax(60px, 1fr) minmax(60px, 1fr) minmax(
        60px,
        1fr
      )
      minmax(80px, 1fr);
    border-bottom: 2px solid ${(props) => props.theme.black_300};
    align-items: center;
    text-transform: capitalize;
    gap: 0.5rem;
    td {
      padding: 0.5rem 0;
    }
  }
  tbody tr:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 768px) {
    th:first-child,
    td:first-child {
      display: none;
    }
    tr {
      grid-template-columns:
        minmax(max-content, 60%) minmax(60px, 1fr) minmax(60px, 1fr) minmax(
          60px,
          1fr
        )
        minmax(60px, 1fr);
    }
  }
`
