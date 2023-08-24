import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHpIVFf_gNoOjlrtbUP1Gv6HyV8HlW4vM",
    authDomain: "hosting-example-4d431.firebaseapp.com",
    databaseURL: "https://hosting-1ce05-default-rtdb.firebaseio.com",
    projectId: "hosting-1ce05",
    storageBucket: "hosting-1ce05.appspot.com",
    messagingSenderId: "279380074239",
    appId: "1:279380074239:web:5d989e8354399f887376ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db }; // Export the database instance

// Functions to interact with the database
const saveData = (data) => {
  const dataRef = ref(db, "contacts");
  push(dataRef, data);
};

export { saveData }; // Export the function to save data
