import React, {Component} from 'react';
import database from './firebase';

class User extends Component{
	constructor(props){
		super(props);
	}

// 	componentDidMount(){
// 		const users = []
// 		database.ref('users').set({
// 			user: {
// 				id: this.props.userId,
// 				displayName: 'this.props.username',
// 				accepts: 'this.props.accepts',
// 				// completed: this.props.completed
// 			}
// 		})

// //post
// //put routes
// //need uid


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

	render(){
		return(
			<div>
			</div>
			)
	}
}


export default User;

