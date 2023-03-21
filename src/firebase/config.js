import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCJoGBPxQLu1rDW0rp2fiStrD3gLyebP3g',
  authDomain: 'fir-gallery-ba130.firebaseapp.com',
  projectId: 'fir-gallery-ba130',
  storageBucket: 'fir-gallery-ba130.appspot.com',
  messagingSenderId: '897865195475',
  appId: '1:897865195475:web:b705bd3a1d0983eb7fd926',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
