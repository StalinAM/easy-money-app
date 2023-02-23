import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from './firebase'

export const registerUser = async (name, email, password, navigate) => {
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

export const loginUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/dashboard')
  } catch (error) {}
}