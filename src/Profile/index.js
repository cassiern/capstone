import React, {Component} from 'react';
// import NavBar from '../Nav';
import '../App.css';
import User from '../firebase/user';
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
	})
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
				<button>Decline</button>
			</div>
			</div>
			)
	}
}


export default Profile;