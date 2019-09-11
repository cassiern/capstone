import React, {Component} from 'react';
// import NavBar from '../Nav';
import '../App.css';
import database, {auth, provider} from '../firebase/firebase';
import User from '../firebase/user';
import Actions from '../firebase/actions';



class Profile extends Component{
	constructor(props){
		super(props);
		this.state ={
			username: '',
			aboutMe: '',
			image: '',
			accept: 0,
			completed: 0
		}
	}
randomFunction = (props) => {
	console.log(this.props.accept, '<-- ACCEPTS in profile')
	this.setState ({
		accept: this.props.accept
	})
	console.log(this.state.accept, '<--- this.state.accept in profile')
}
updateCompleted = (e) =>{
	this.setState({
		completed: this.state.completed + 1
	}
	// , () => {
	// 	database.ref('users/' + this.props.userKey).update({
	// 		accepts: this.state.accepts,
	// 		completed: this.state.completed
	// 	})
	// 	.then((data) => {
	// 		console.log('data after updateCompleted: ', data)
	// 		this.setState({
	// 			...data
	// 		})
	// 	})
	// }
	)
}




removeAction = (e) => {
	//remove the action from the database
}









	render(){
		return(
			<div>
			<User completed={this.state.completed} />
			<header>Welcome {this.props.username}</header>
			<img src={this.props.image} className="ProfileImg"/>
			<div>
				<h6>Completed Actions: {this.state.completed}</h6>
				<h4>{this.props.actionOTDay}</h4>
				<button onClick={this.updateCompleted}>Complete</button>
				<button onClick={this.removeAction}>Decline</button>
			</div>
			<button onClick={this.randomFunction}>Random</button>
			</div>
			)
	}
}


export default Profile;
















// deleteUser = (e) => {
// 	const user = database.auth().currentUser;
// 	user.delete().then(function() {
// 		console.log('User deleted.')
// 	}).catch(function(error) {
// 		console.log('error deleting a user', error)
// 	})
// }

// update route above
// when a user is created, create a parallel 
// post route with uid, accpets, completed to user db
// according to firebase docs (saving data), you'll need 
// to PUSH a 'created user' that is created at the same time as a regi
// and UPDATE the comments and accepts. Some how cross reference so 
// that the edits made to user db is that same user as google auth
// https://firebase.google.com/docs/database/admin/save-data <-- good docs



	// componentDidMount(){
	// 	const users = []
	// 	database.ref('users').set({
	// 		user: {
	// 			id: this.props.userId,
	// 			displayName: this.props.username,
	// 			accepts: this.props.accepts,
	// 			completed: this.state.completed
	// 		}
	// 	})
		
//post
//put routes
//need uid


// const userInDataBase = [];
// 	database.ref('users').on('value', (snapshot) => {

// 			snapshot.forEach((childSnapShot) => {
// 				userInDataBase.push({
// 					id: childSnapShot.key,
// 					...childSnapShot.val()
// 				})
// 			})
// 		console.log(userInDataBase, '<-- userInDataBase')

// 	 	// this.props.fetchingUser(userInDataBase)
// 		})

// }

//pass this state up








