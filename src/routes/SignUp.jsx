import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
