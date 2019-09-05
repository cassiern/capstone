import firebase from 'firebase/app';
import 'firebase/database';



import firebaseui from 'firebaseui';

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

export default database