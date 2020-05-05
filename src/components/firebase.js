import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyAIae2xJEZMbIyaTQ2ht4CnI0UHbJtL6fI",
  authDomain: "react-reminder-2.firebaseapp.com",
  databaseURL: "https://react-reminder-2.firebaseio.com",
  projectId: "react-reminder-2",
  storageBucket: "react-reminder-2.appspot.com",
  messagingSenderId: "130650036145",
  appId: "1:130650036145:web:92f9813c054d0081e00f90",
  measurementId: "G-TL7JX69EE6"
};
firebase.initializeApp(config);


export default firebase;
