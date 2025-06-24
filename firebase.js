import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot  } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBgln47TB5KK4u8OPifOPcjav0_S1Q-ZUs",
  authDomain: "test-4dcf0.firebaseapp.com",
  databaseURL: "https://test-4dcf0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-4dcf0",
  storageBucket: "test-4dcf0.firebasestorage.app",
  messagingSenderId: "252652582147",
  appId: "1:252652582147:web:96099e11f4fe506c44a536",
  measurementId: "G-BRFM6WY3NF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
