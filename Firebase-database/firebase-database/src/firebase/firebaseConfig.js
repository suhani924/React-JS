import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyD2Iy1nhkvwA9FCDe6lFwkcSQrm7F-rMRQ",
  authDomain: "fir-database-e8487.firebaseapp.com",
  databaseURL: "https://fir-database-e8487-default-rtdb.firebaseio.com",
  projectId: "fir-database-e8487",
  storageBucket: "fir-database-e8487.firebasestorage.app",
  messagingSenderId: "1092416924428",
  appId: "1:1092416924428:web:54fbfda12777bff9187729"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)