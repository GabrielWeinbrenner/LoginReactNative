
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCDcXuQ-YdluKKkqH7Tsb6ii2iK2Y_x7RE",
    authDomain: "chat-8f2de.firebaseapp.com",
    databaseURL: "https://chat-8f2de.firebaseio.com",
    projectId: "chat-8f2de",
    storageBucket: "chat-8f2de.appspot.com",
    messagingSenderId: "569350929553",
    appId: "1:569350929553:web:a45d5feae9f7f19d2cd330",
    measurementId: "G-SNBM636RD4"
};

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase