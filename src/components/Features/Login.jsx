import React from 'react'
import styled from 'styled-components'
import loginImg from '../../assets/login.webp'
function Login() {
  return (
    <Container>
      <img src={loginImg} alt='' />
      <Content>
        <h2>Accede sin líos, ¡Entra en segundos!</h2>
        <p>
          La aplicación está diseñada para ser accesible a través de Facebook,
          GitHub y Hotmail, lo que permite a los usuarios registrarse e iniciar
          sesión con sus credenciales de estas plataformas.
        </p>
        <p>
          La integración con Facebook, GitHub y Hotmail permite una mayor
          seguridad y privacidad de los datos financieros, y facilita el acceso
          a la aplicación desde cualquier lugar con conexión a Internet.
        </p>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.article`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
  img {
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: #00000021 0px 1px 9px 0px;
  }
`
const Content = styled.div`
  max-width: 50ch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-size: ${(props) => props.theme.xlFont};
    color: ${(props) => props.theme.darkBlue};
  }
  p {
    font-size: ${(props) => props.theme.mFont};
    color: ${(props) => props.theme.white};
  }
`
