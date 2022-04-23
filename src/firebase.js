// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxx56OlmSQTtY91Z53ONNbv5dGPahKc4s",
  authDomain: "epic-react-form.firebaseapp.com",
  projectId: "epic-react-form",
  storageBucket: "epic-react-form.appspot.com",
  messagingSenderId: "228637389606",
  appId: "1:228637389606:web:407132bd89e1f1bf9f07e7"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };