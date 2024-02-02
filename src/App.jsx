import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from './style/Theme'
import GlobalStyles from './style/GlobalStyles'
import { useContext, useState } from 'react'

import Home from './routes/Home'
import DashboardTables from './routes/dashboard/DashboardTables'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import { AuthContext } from './context/Auth'
import { TransactionContext } from './context/TransactionsContext'
import Filter from './routes/dashboard/DashboardFilter'
import Dashboard from './routes/dashboard/Dashboard'
import LayoutDashboard from './routes/dashboard/LayoutDashboard'

function App() {
  const { currentUser } = useContext(AuthContext)
  const { arrayTransactions } = useContext(TransactionContext)
  const [activeMenu, setActiveMenu] = useState(false)
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
      return <Navigate to='/dashboard/overview' />
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
                <LayoutDashboard
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                />
              </ProtectDashboard>
            }
          >
            <Route
              path='tables'
              element={
                <DashboardTables
                  setActiveMenu={setActiveMenu}
                  arrayTransactions={sortArray}
                />
              }
            />
            <Route
              path='overview'
              element={
                <Dashboard
                  setActiveMenu={setActiveMenu}
                  arrayTransactions={sortArray}
                />
              }
            />
            <Route
              path='filter'
              element={
                <Filter
                  setActiveMenu={setActiveMenu}
                  arrayTransactions={sortArray}
                />
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
