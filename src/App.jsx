import { useState } from 'react'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default App
