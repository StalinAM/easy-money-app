import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.section`
  max-width: 600px;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  border-radius: 30px;
`
const Header = styled.header`
  position: absolute;
  width: 70%;
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
  right: 50%;
  transform: translate(50%, -50%);
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 1.5rem;
  margin: 0 auto;
`
const Imput = styled.input`
  border: 2px solid ${(props) => props.theme.xLightBlue};
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
const SubmitBtn = styled.button`
  margin-top: 2.5rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.mFont};
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
        <Content>
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
            <SubmitBtn type='submit'>Sign Up</SubmitBtn>
          </FormC>
        </Content>
      </Container>
    </main>
  )
}

export default SignUp
