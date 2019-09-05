import React, {Component} from 'react';
import database from './firebase';

class User extends Component{


	componentDidMount(){
		const users = []
		database.ref('users').set({
			user1: {
				name: "Cassie Nichols",
				age: 22,
				place: 'denver'
			},
			user2: {
				name: 'Butch Cassidy',
				age: 'old',
				place: 'Middle of nowhere'
			},
		})
		.then(()=> {
			console.log('Data Written Successfully')
		})
		.catch((error) => {console.log('Firebase error', error)
	})
	}

	render(){
		return(
			<div>
			FireBase in Users is working
			</div>
			)
	}
}


export default User;















