import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
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
export const insertNewTransaction = async (transaction) => {
  try {
    const transactionsRef = collection(db, 'transactions')
    await addDoc(transactionsRef, transaction)
  } catch (e) {
    console.log(e)
  }
}
export async function fetchTransactions(uid) {
  const transactions = []
  const q = query(collection(db, 'transactions'), where('uid', '==', uid))

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const transaction = { ...doc.data() }
    transaction.docId = doc.id

    transactions.push(transaction)
  })
  return transactions
}
