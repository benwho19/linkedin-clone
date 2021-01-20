import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUgJrTr16OetJ4X6N0-cnUa3lfc4VIvPQ",
    authDomain: "linkedin-clone-4a66f.firebaseapp.com",
    projectId: "linkedin-clone-4a66f",
    storageBucket: "linkedin-clone-4a66f.appspot.com",
    messagingSenderId: "520283512838",
    appId: "1:520283512838:web:95fe76976e071de0e96387",
    measurementId: "G-14VS3N1E9M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };