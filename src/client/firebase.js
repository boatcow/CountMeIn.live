import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})

export const auth = app.auth()
export default app

