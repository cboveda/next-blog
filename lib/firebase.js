import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBblZqe8mezWLt4yLW6-yZIH3e-yloFe-I",
    authDomain: "next-blog-55d7d.firebaseapp.com",
    projectId: "next-blog-55d7d",
    storageBucket: "next-blog-55d7d.appspot.com",
    messagingSenderId: "492093077006",
    appId: "1:492093077006:web:c04e573aad1250d492ee5f"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore()
export const storage = firebase.storage()

