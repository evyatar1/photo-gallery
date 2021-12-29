import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDrW2VZaJvNwyNOLEZYnxmawK6UdqBnWrw",
  
    authDomain: "photo-gallery-dd69c.firebaseapp.com",
  
    projectId: "photo-gallery-dd69c",
  
    storageBucket: "photo-gallery-dd69c.appspot.com",
  
    messagingSenderId: "240267874597",
  
    appId: "1:240267874597:web:5639fa8b577776c8908acc"
  
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };



