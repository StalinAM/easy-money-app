import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './style/GlobalStyles'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { dark } from './style/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SignIn />
                <SignUp />
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
