import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Cointainer = styled.main`
  min-height: 100vh;

  max-width: 600px;
  margin: auto;
`
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signIn = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      navigate('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Cointainer>
      <form onSubmit={signIn}>
        <h1>Login In</h1>
        <input
          type='email'
          placeholder='Ingresa un correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Ingresa una contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Log in</button>
      </form>
    </Cointainer>
  )
}

export default SignIn