import React, {Component} from 'react';
import database, {auth, provider} from '../firebase/firebase';

class Register extends Component {
  constructor() {
    super();
    this.state= {
    	username: '',
    	user: null
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
		console.log(this.state.user.displayName, '<-------- displayNAme')
	});
}


//admin privilege
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
	// let user = Auth.auth().currentUser

	// user?.delete { error in
	//   if let error = error {
	//     // An error happened.
	//   } else {
	//     // Account deleted.
	//   }
	// }
}

render(){
  return(
  	<div>

    <header>
    	<div className="wrapper">
    		<h1>Motivation = Movement</h1>
			    {this.state.user ?
			    	<div>
			    	<button onClick={this.logout}>Logout</button>
			    	<button onClick={this.deleteUser}>Delete Account</button>
			    	</div>
			    	:
			    	<button onClick={this.login}>Log In</button>
			    }    		   		
    	</div>
    </header>
    </div>
    )
}
}
export default Register;