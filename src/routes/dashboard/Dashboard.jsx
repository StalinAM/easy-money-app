import styled from 'styled-components'
import Profile from '../../components/Profile'
import Table from '../../components/Table'
import MounthValues from '../../components/MounthValues'

function Dashboard({ arrayTransactions, setActiveMenu }) {
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
      <Profile setActiveMenu={setActiveMenu} />
      <MounthValues />
      <Table
        arrayTransactions={filteredTransactions.slice(0, 9)}
        title='Ultimas transacciones'
        row='3/5'
      />
    </Container>
  )
}

export default Dashboard

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem;
  position: relative;
  @media screen and (max-width: 1140px) {
    padding-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    height: auto;
  }
`
