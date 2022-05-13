import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBblZqe8mezWLt4yLW6-yZIH3e-yloFe-I",
    authDomain: "next-blog-55d7d.firebaseapp.com",
    projectId: "next-blog-55d7d",
    storageBucket: "next-blog-55d7d.appspot.com",
    messagingSenderId: "492093077006",
    appId: "1:492093077006:web:c04e573aad1250d492ee5f"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();


/**
 * Gets a users/{uid} document with username
 * @param {string} username 
 * @returns 
 */
export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
}

/**
 * Converts a firestore doc to JSON
 * @param {DocumentSnapshot} doc 
 */
export function postToJSON(doc) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;