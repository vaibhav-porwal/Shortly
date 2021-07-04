import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyApvJBePtt7-t-MLV5oc10g-8cOr1iyveg",
    authDomain: "urlshorten-3eb8a.firebaseapp.com",
    projectId: "urlshorten-3eb8a",
    storageBucket: "urlshorten-3eb8a.appspot.com",
    messagingSenderId: "683710264509",
    appId: "1:683710264509:web:d8b1fd0f94ce34f4c3b3d4",
    measurementId: "G-8M5Z4BKS7B"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
export const db=firebaseApp.firestore();


