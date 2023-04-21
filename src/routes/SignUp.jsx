import React, { useState } from 'react'
import { registerUser } from '../firebase/services'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Input, LabelInput } from '../style/StyleComponents'

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault()
    registerUser(name, email, password, navigate, setError)
  }

  return (
    <Container>
      <Content>
        <Header>
          <h1>Crear una cuenta</h1>
        </Header>
        <FormC onSubmit={signUp}>
          <BoxData>
            <div>
              <LabelInput>Nombre</LabelInput>
              <Input
                type='text'
                placeholder='nombre'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <LabelInput>Correo electrónico</LabelInput>
              <Input
                type='email'
                placeholder='ejemplo@dominio.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <LabelInput>Contraseña</LabelInput>
              <Input
                type='password'
                placeholder='contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <ErrorMessage>
                <i className='uil uil-exclamation-triangle' />
                {error}
              </ErrorMessage>
            )}
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

const Container = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`
const Content = styled.div`
  background-color: ${(props) => props.theme.black_200};
  border: 2px solid ${(props) => props.theme.black_500};
  position: relative;
  border-radius: 30px;
  width: 425px;
  padding: 4rem 0;
  @media screen and (max-width: 480px) {
    width: 340px;
    padding: 3rem 0;
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
const Login = styled.p`
  display: flex;
  gap: 1.125rem;
  color: ${(props) => props.theme.gray};
  a {
    font-weight: 700;
    color: ${(props) => props.theme.black_500};
    position: relative;
    &:hover {
      text-decoration: underline;
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
