import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwf5b9Wu-bgSangHnPXcOCywMJbnidc_Q",
    authDomain: "react-firebase-gallery-fe32c.firebaseapp.com",
    projectId: "react-firebase-gallery-fe32c",
    storageBucket: "react-firebase-gallery-fe32c.appspot.com",
    messagingSenderId: "672749384597",
    appId: "1:672749384597:web:20947e2ff01be42e433c9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }