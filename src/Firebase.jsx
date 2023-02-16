// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBs53ClahpeFzoismFmn5C2br1Kd2I07gw',
  authDomain: 'easy-money-621ad.firebaseapp.com',
  projectId: 'easy-money-621ad',
  storageBucket: 'easy-money-621ad.appspot.com',
  messagingSenderId: '7159857453',
  appId: '1:7159857453:web:2a48e817fb038939de13a4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
