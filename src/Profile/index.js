import React, {Component} from 'react';
import NavBar from '../Nav';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state ={
			username: '',
			aboutMe: '',
			image: '',
			accept: 0
		}
	}
randomFunction = (props) => {
	console.log(this.props.accept, '<-- ACCEPTS in profile')
	this.setState ({
		accept: this.props.currentUser.accept
	})
	console.log(this.state.accept, '<--- this.state.accept in profile')
}

	render(){
		return(
			<div>
			<NavBar />
			<h4>{this.props.accept}</h4>
			</div>
			)
	}
}


export default Profile;