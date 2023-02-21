import { Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from './style/Theme'
import GlobalStyles from './style/GlobalStyles'
import { useContext } from 'react'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Profile from './routes/Profile'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import { AuthContext } from './context/Auth'

function App() {
  const { currentUser } = useContext(AuthContext)
  const ProtectRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/signin' />
    }
    return children
  }
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route
            path='dashboard'
            element={
              <ProtectRoute>
                <Dashboard />
              </ProtectRoute>
            }
          />
          <Route path='u/:username' element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
