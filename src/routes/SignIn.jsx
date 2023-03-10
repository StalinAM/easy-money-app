import React, { useState } from 'react'
import { loginUser } from '../firebase/services'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Input, LabelInput } from '../style/StyleComponents'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault()
    loginUser(email, password, navigate, setError)
  }
  return (
    <Container>
      <Content>
        <Header>
          <h1>Iniciar sesión</h1>
          <SigninRS>
            <i className='uil uil-facebook-f'></i>
            <i className='uil uil-github-alt'></i>
            <i className='uil uil-microsoft'></i>
          </SigninRS>
        </Header>
        <FormC onSubmit={signIn}>
          <BoxData>
            <div>
              <LabelInput htmlFor='email'>Correo electrónico</LabelInput>
              <Input
                name='email'
                type='email'
                placeholder='ejemplo@dominio.com'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                required
              />
            </div>
            <div>
              <LabelInput htmlFor='password'>Contraseña</LabelInput>
              <Input
                name='password'
                type='password'
                placeholder='contraseña'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                required
              />
            </div>
            {error && (
              <ErrorMessage>
                <i className='uil uil-exclamation-triangle' />
                {error}
              </ErrorMessage>
            )}
          </BoxData>
          <SubmitBtn type='submit'>Iniciar sesión</SubmitBtn>
          <SignUp>
            ¿No tienes una cuenta?<Link to='/signup'>Registrarse</Link>
          </SignUp>
        </FormC>
      </Content>
    </Container>
  )
}

export default SignIn

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
  padding: 5.5rem 0 3rem;
`
const Header = styled.header`
  position: absolute;
  width: 75%;
  background-color: ${(props) => props.theme.blue};
  margin: auto;
  padding: 1rem 0;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  box-shadow: #ffffff 0px 0px 0px 2px;
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
  gap: 1rem;
  margin: 0 auto;
`
const BoxData = styled.section`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
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
const SignUp = styled.p`
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
const SigninRS = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  i {
    cursor: pointer;
    font-size: 1.7rem;
    color: ${(props) => props.theme.white};
    &:hover {
      color: ${(props) => props.theme.lightBlue};
    }
  }
`
const ErrorMessage = styled.span`
  position: absolute;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: #f44334;
  bottom: -2.4rem;
  left: 0;
  i {
    color: #f44334;
    font-size: ${(props) => props.theme.mFont};
  }
`
