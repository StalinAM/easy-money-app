import styled from 'styled-components'
import Profile from '../components/Profile'
import Table from '../components/Table'
import Menu from '../components/Menu'
import MounthValues from '../components/MounthValues'

function Dashboard({ arrayTransactions }) {
  const currentMonth = new Date().getMonth() + 1
  const currentYear = new Date().getFullYear()

  const filteredTransactions = arrayTransactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date)
    return (
      transactionDate.getMonth() + 1 === currentMonth &&
      transactionDate.getFullYear() === currentYear
    )
  })
  return (
    <Container>
      <Menu row='1/5' />
      <Profile />
      <MounthValues />
      <Table
        arrayTransactions={filteredTransactions}
        title='Ultimas transacciones'
        row='3/5'
      />
    </Container>
  )
}

export default Dashboard

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 4rem 6rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.blue};
`
