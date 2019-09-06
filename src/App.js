import React, {Component} from 'react';
import database, {auth, provider} from './firebase/firebase';
import logo from './logo.svg';
import './App.css';
import MainContainer from './MainContainer';
import Profile from './Profile';
// import Nav from './Nav';


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

}

render(){
  return(
  	<div className="App">

    <header>
    	<div className="wrapper">
    		<h1 className="logoName">M = M</h1>
			    {this.state.user ?
			    	<div className="navBar">
			    	<button onClick={this.logout} className="logout">Logout</button>
			    	<a href="/profile">Profile</a>
			    	<a href="/home">Home</a>
			    	</div>
			    	:
			    	<button onClick={this.login}>Log In</button>
			    
			    }    		   		
    	</div>
    </header>

    {this.state.user? 
    	<div>
	    	<div className="maincontainer">
	    		<MainContainer user={this.state.user} image={this.state.user.photoURL}/>
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

	    	// <form>
	    	// 	<input type="text" name="username" placeholder="Username" value={this.state.user.displayName || this.state.user.email} />
	    	// </form>
