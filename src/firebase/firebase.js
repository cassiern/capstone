import firebase, {child} from 'firebase';
import 'firebase/database';



// import firebaseui from 'firebaseui';

// from firebase...
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');



	// firebase says I need this url listed first...?
	//<script src="https://www.gstatic.com/firebasejs/6.5.0/firebase-app.js"></script>

	  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBSvbvmpLxnMq-WNnL5aCk_2MfIohFwTcA",
    authDomain: "capsstone2.firebaseapp.com",
    databaseURL: "https://capsstone2.firebaseio.com",
    projectId: "capsstone2",
    storageBucket: "",
    messagingSenderId: "739283785572",
    appId: "1:739283785572:web:bca7002361b65c91"
  };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const myFirebase = firebase.database().ref();

// const newAction = myFirebase.child('actions')
// newAction.push({
//   action: 'here is a new action'
// })

export const auth = firebase.auth();
//exports google auth for in in
export const provider = new firebase.auth.GoogleAuthProvider();
//exports auth module form firebase

export default database








