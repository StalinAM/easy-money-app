import React from 'react'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

function Auth({ children }) {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user.displayName)
    })

    return () => {
      unsub()
    }
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
