import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCL2v2zRHWrTaJRfbbrO_gE_EvCKlSpsSs",
    authDomain: "powerofnow-99c63.firebaseapp.com",
    databaseURL: "https://powerofnow-99c63-default-rtdb.firebaseio.com/",
    projectId: "powerofnow-99c63",
    storageBucket: "powerofnow-99c63.appspot.com",
    messagingSenderId: "64049933303",
    appId: "1:64049933303:web:6f954dbb80782a6684dcf2",
    measurementId: "G-FYQ1XN6HSG"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})
export const auth = firebase.auth()
export default firebase