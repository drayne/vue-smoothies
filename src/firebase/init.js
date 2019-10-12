import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxJiNraNP8DAYBwKknaQQmab-dsfdgXrk",
    authDomain: "equi-ninja-smoothies.firebaseapp.com",
    databaseURL: "https://equi-ninja-smoothies.firebaseio.com",
    projectId: "equi-ninja-smoothies",
    storageBucket: "equi-ninja-smoothies.appspot.com",
    messagingSenderId: "144494219778",
    appId: "1:144494219778:web:954826d0060ff14412cd1b"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

//export firestore
export default firebaseApp.firestore()