import React, {Component} from 'react';
import database from '../firebase/firebase';

class Register extends Component {
  constructor() {
    super();
    this.state= {
    	email: '',
    	password: ''
    }
}
//firebase register logic

//sets preferred language
// database.auth().useDeviceLanguage();

// Using a popup.
//instance of Google provider object

signUp = (e) => {
	const provider = new database.auth.GoogleAuthProvider();

	database.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  console.log(user, '<-- USER')
}).catch(function(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
});
}


//admin privalege
// provider.addScope("https://www.googleapis.com/auth/admin.datatransfer");

//sign out logic
logout = (e) => {
	database.auth().signOut().then(function() {
	   console.log('Sign-out successful.')
	}).catch(function(error) {
		console.log('An error happened.')
		return error;  
	});
}

//deleting a user logic
deleteUser = (e) => {
	const user = database.auth().currentUser;
	user.delete().then(function() {
	  console.log('User deleted.')
	}).catch(function(error) {
	  console.log('An error happened.')
	});
}





render(){
  return(
    <div>
      <form onSubmit={this.signUp}>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="submit" value="submit" />
	  </form>
	  <button onClick={this.deleteUser}>Delete Account</button>
	  <button onClick={this.logout}>Logout</button>
    </div>
    )
}
}
export default Register;