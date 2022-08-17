// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRMIyI1fp4aPpUor_mfUqFkKClJQ4V_Y4",
  authDomain: "playpals-4b835.firebaseapp.com",
  databaseURL: "https://playpals-4b835.firebaseio.com",
  projectId: "playpals-4b835",
  storageBucket: "playpals-4b835.appspot.com",
  messagingSenderId: "133088163575",
  appId: "1:133088163575:web:c353b9ced71c6bceec45f2",
  measurementId: "G-Q9YR30BBV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
// export default auth, db
export default db


