import firebase from "firebase";const firebaseConfig = {    apiKey: "AIzaSyDBdTiaW9RjQXf7x6FltzIOX1L11Ek3ZrE",    authDomain: "coffeepang-a3a2f.firebaseapp.com",    projectId: "coffeepang-a3a2f",    storageBucket: "coffeepang-a3a2f.appspot.com",    messagingSenderId: "893582678580",    appId: "1:893582678580:web:0f3fb11505488b6dba8861",    measurementId: "G-WYBKFZQRDS"}try {    firebase.initializeApp(firebaseConfig);} catch(err){    if (!/already exists/.test(err.message)) {        console.error('Firebase initialization error', err.stack)}}const fire = firebase;export default fire;