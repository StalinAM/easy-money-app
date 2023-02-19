import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from './style/Theme'
import GlobalStyles from './style/GlobalStyles'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Profile from './routes/Profile'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='u/:username' element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
