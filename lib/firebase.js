import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

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
export const firestore = firebase.firestore()
export const storage = firebase.storage()