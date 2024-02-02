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
            <i className='uil uil-google'></i>
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
      <Demo>
        <span>Demo: </span>
        <span>
          <strong>correo: </strong>stalin@hotmail.com
        </span>
        <span>
          <strong>contraseña: </strong>stalin
        </span>
      </Demo>
    </Container>
  )
}

export default SignIn

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`
const Content = styled.div`
  background-color: ${(props) => props.theme.black_200};
  position: relative;
  border-radius: 30px;
  width: 425px;
  padding: 5.5rem 0 3rem;
  border: 2px solid ${(props) => props.theme.black_500};
  @media screen and (max-width: 480px) {
    width: 340px;
    padding: 4.5rem 0 3rem;
  }
`
const Header = styled.header`
  position: absolute;
  width: 75%;
  background-color: ${(props) => props.theme.black_500};
  margin: auto;
  padding: 1rem 0;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
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
  @media screen and (max-width: 480px) {
    max-width: 280px;
  }
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
  background-color: ${(props) => props.theme.black_500};
  font-size: ${(props) => props.theme.mFont};
  &:hover {
    background: none;
    box-shadow: inset 0 0 0 4px ${(props) => props.theme.black_500};
    color: ${(props) => props.theme.black_500};
  }
`
const SignUp = styled.p`
  display: flex;
  gap: 1.125rem;
  color: ${(props) => props.theme.black_400};
  a {
    font-weight: 700;
    color: ${(props) => props.theme.black_500};
    position: relative;
    &:hover {
      text-decoration: underline;
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
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
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
  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`
const Demo = styled.p`
  display: flex;
  gap: 8px;
  color: ${(props) => props.theme.black_400};
  font-weight: 400;
`
