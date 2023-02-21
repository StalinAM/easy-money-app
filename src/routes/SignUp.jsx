import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`
const Content = styled.div`
  background-color: ${(props) => props.theme.white};
  position: relative;
  border-radius: 30px;
  width: 425px;
  padding: 4rem 0;
`
const Header = styled.header`
  position: absolute;
  width: 75%;
  background-color: ${(props) => props.theme.blue};
  margin: auto;
  padding: 1rem 0;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  box-shadow: #dce7f7 0px 0px 0px 2px;
  h1 {
    color: ${(props) => props.theme.white};
    font-size: ${(props) => props.theme.lFont};
  }
  top: 0;
  right: 50%;
  transform: translate(50%, -50%);
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 1.125rem;
  margin: 0 auto;
`
const BoxData = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`
const Input = styled.input`
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
  padding: 0.75rem 1rem;
  border-radius: 12px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background-color: ${(props) => props.theme.blue};
  font-size: ${(props) => props.theme.mFont};
  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
  }
`
const Login = styled.p`
  display: flex;
  gap: 1.125rem;
  color: ${(props) => props.theme.gray};
  a {
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    position: relative;

    &:hover {
      color: ${(props) => props.theme.lightBlue};
    }
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
      navigate('/dashboard')
    } catch (error) {}
  }
  return (
    <Container>
      <Content>
        <Header>
          <h1>Crear una cuenta</h1>
        </Header>
        <FormC onSubmit={signUp}>
          <BoxData>
            <Input
              type='text'
              placeholder='Ingrese tu nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='email'
              placeholder='Ingrese un correo'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              placeholder='Ingrese una contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </BoxData>
          <SubmitBtn type='submit'>Registrarse</SubmitBtn>
          <Login>
            ¿Ya tienes una cuenta?<Link to='/signin'>Iniciar sesión</Link>
          </Login>
        </FormC>
      </Content>
    </Container>
  )
}

export default SignUp
