import React from 'react'
import loginImg from '../../assets/login.webp'
import { Container, Content } from '../style/StyleComponents'

function Login() {
  return (
    <Container>
      <img src={loginImg} alt='' />
      <Content>
        <h3>Accede sin líos, ¡Entra en segundos!</h3>
        <p>
          La aplicación está diseñada para ser accesible a través de Google,
          GitHub y Hotmail, lo que permite a los usuarios registrarse e iniciar
          sesión con sus credenciales de estas plataformas.
        </p>
        <p>
          La integración con Google, GitHub y Hotmail permite una mayor
          seguridad y privacidad de los datos, y facilita el acceso a la
          aplicación desde cualquier lugar con conexión a Internet.
        </p>
      </Content>
    </Container>
  )
}

export default Login
