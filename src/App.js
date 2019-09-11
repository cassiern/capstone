import React, {Component} from 'react';
import database, {auth, provider} from './firebase/firebase';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';
import Profile from './Profile';
import NavBar from './Nav';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
    	displayName: '',
    	user: null,

    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
}
//firebase register logic

componentDidMount(){
	auth.onAuthStateChanged((user) => {
		if(user) {
			this.setState({ user });
		}
	})
}

login() {
	auth.signInWithPopup(provider)
	.then((result) => {
		const user = result.user;
		this.setState({
			user
		});
		console.log(this.state.user, '<-- USER in state')
		console.log(this.state.user.photoURL, '<-- photo')
		console.log(this.state.user.displayName, '<-------- displayNAme')
		console.log(this.state.user.uid, '<---- USER unique id')
	});
}



//admin privalege
// provider.addScope("https://www.googleapis.com/auth/admin.datatransfer");

//sign out logic
logout() {
	auth.signOut()
	.then(()=> {
		this.setState({
			user: null
		});
	});
}

//deleting a user logic
deleteUser = (e) => {
	const user = firebase.auth().currentUser.delete()
	.then(function() {
	  console.log('User deleted.')
	}).catch(function(error) {
		return error
	  console.log('An error happened.')
	});

	this.logout();
}

render(){
  return(
  	<div className="App">
    <header>
    	<div className="wrapper">
    		
			    {this.state.user ?
			    	<div className="navBar">
			    	<NavBar logout={this.logout} image={this.state.user.photoURL} deleteUser={this.deleteUser}/>		    	
			    	</div>
			    	:
			    	<NavBar login={this.login}/>		    
			    }    		   		
    	</div>
    </header>

    {this.state.user? 
    	<div>
	    	<div className="maincontainer">
	    		<MainContainer user={this.state.user} />
	    	</div>
    	</div>
    	:
    	<div className="wrapper">
    		<p>You must be logged in to access the App. Sign in with your Google account!</p>

    	</div>
    }
	</div>
    )
}
}
export default App;
