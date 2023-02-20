import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.section`
  max-width: 600px;
`
const Header = styled.header`
  max-width: 500px;
  background-color: ${(props) => props.theme.lightBlue};
  margin: auto;
  padding: 1rem 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  h1 {
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.lFont};
  }
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 1rem;
`
const Imput = styled.input`
  border: 2px solid ${(props) => props.theme.xLightPurple};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: none;
  color: ${(props) => props.theme.darkBlue};
  font-weight: 400;
  font-size: ${(props) => props.theme.mFont};
  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`
function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const signUp = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(userCredential.user, {
        displayName: name
      })
      console.log(userCredential)
      navigate('/dashboard')
    } catch (error) {}
  }
  return (
    <main>
      <Container>
        <Header>
          <h1>Crear una cuenta</h1>
        </Header>
        <FormC onSubmit={signUp}>
          <Imput
            type='text'
            placeholder='Ingresa tu Nombre'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Imput
            type='email'
            placeholder='Ingresa un correo'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Imput
            type='password'
            placeholder='Ingresa una contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Sign Up</button>
        </FormC>
      </Container>
    </main>
  )
}

export default SignUp
