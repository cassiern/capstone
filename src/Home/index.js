import React, {Component} from 'react';
import Quotes from '../firebase/quotes';
import database from '../firebase/firebase';
import { Button, Card, Image } from 'semantic-ui-react';
import '../App.css';
// import NavBar from '../Nav';


//where the quotes and actions are render
class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			accept: 0,
			counter: 0,
			actionOTDay: {}
		}
	}
// create modal that onLoad pops up with how to navigate the app


//prompts message maybe? 
//updates the accepts in the parent state
updateAccepts = (e) => {
		this.setState({
			accept: this.props.accept(this.props.accept + 1)
		})
}

// can only click three times (you only get to see 3 action options a day)
// in user, total declines = 2

untoNext = (e) => {
	this.props.fetchNextAction();
}


	render(){
		return(
			<div>
			
			<div class="ui cards">
			  <div class="ui card">
			    <div class="content">
			      <img src="https://source.unsplash.com/random" class="ui mini right floated image"/>
			      <div class="header"><p>{this.props.actionOTDay}</p></div>
			      <div class="meta"></div>
			      <div class="description">
			        <h6>{this.props.quoteOTDay}</h6>
			      </div>
			    </div>
			    <div class="extra content">
			      <div class="ui two buttons">
			        <button class="ui green basic button" onClick={this.updateAccepts}>Accept</button>
			        <button class="ui red basic button" onClick={this.untoNext}>Decline</button>
			      </div>
			    </div>
			  </div>
			  </div>
			  </div>
			)
		}
	}

export default Home;