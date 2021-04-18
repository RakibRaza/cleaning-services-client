import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDhwVyhayn1XmA0iuqLEehPsxIW8qlCdAE",
  authDomain: "fastpro-bd.firebaseapp.com",
  projectId: "fastpro-bd",
  storageBucket: "fastpro-bd.appspot.com",
  messagingSenderId: "890902755066",
  appId: "1:890902755066:web:ad0a185d1e44a73c493b43",
});
export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
