import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from './style/Theme'
import GlobalStyles from './style/GlobalStyles'
import { useContext } from 'react'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Profile from './components/Profile'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import { AuthContext } from './context/Auth'
import Tables from './routes/Tables'
import { TransactionContext } from './context/TransactionsContext'

function App() {
  const { currentUser } = useContext(AuthContext)
  const { arrayTransactions } = useContext(TransactionContext)
  const sortArray = arrayTransactions.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB - dateA
  })
  const ProtectDashboard = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/signin' />
    }
    return children
  }
  const ProtectLogin = ({ children }) => {
    if (currentUser) {
      return <Navigate to='/dashboard' />
    }
    return children
  }
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='signin'
            element={
              <ProtectLogin>
                <SignIn />
              </ProtectLogin>
            }
          />
          <Route
            path='signup'
            element={
              <ProtectLogin>
                <SignUp />
              </ProtectLogin>
            }
          />
          <Route
            path='dashboard'
            element={
              <ProtectDashboard>
                <Dashboard arrayTransactions={sortArray} />
              </ProtectDashboard>
            }
          />
          <Route
            path='tables'
            element={
              <ProtectDashboard>
                <Tables arrayTransactions={sortArray} />
              </ProtectDashboard>
            }
          />
          <Route path='u/:username' element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
