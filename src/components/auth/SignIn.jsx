import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase'
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
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
    </div>
  )
}

export default SignIn
