import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { dark } from './style/Theme'
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
