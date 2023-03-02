import { async } from '@firebase/util'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from './firebase'

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
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/dashboard')
  } catch (error) {}
}

export const logoutUser = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    console.log(error)
  }
}
export const insertNewItem = async (newTransaction) => {
  try {
    const transactionsRef = collection(db, 'transactions')
    const res = await addDoc(transactionsRef, newTransaction)
    return res
  } catch (e) {}
}
