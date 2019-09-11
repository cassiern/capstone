import React, {Component} from 'react';
import Quotes from '../firebase/quotes';
import database from '../firebase/firebase';
import { Button} from 'semantic-ui-react';
import '../App.css';
// import NavBar from '../Nav';


//where the quotes and actions are render
class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			counter: 0,
			accept: 0,
			actionOTDay: {},
			completed: 0,
			isCompleted: false

		}
	}

updateAccepts = (e) => {

		 this.props.accept(this.props.accept + 1)
		 this.setState({
		 	isCompleted: !this.state.isCompleted
		 })

}

componentDidMount()
{
	this.setState(
	{
		parentAccepts: this.props.parentAccepts
	});
}

untoNext = (e) => {
	this.props.fetchNextAction();
}
isCompleted =(e) => {
	this.setState({
		completed: this.state.completed + 1,
		parentAccepts: this.state.parentAccepts + 1,
		isCompleted: !this.state.isCompleted
	})
}
nextQuote =(e) => {
	this.props.fetchingNextQuote();
}

	render(){
		console.log(this.props.parentAccepts, 'parent accepts in home')
		return(
			<div>			

			    <div class="content">
			    	<div className="header"><p>{this.props.actionOTDay}</p></div>
			      <div class="description">
			        <h6>{this.props.quoteOTDay}</h6>
			      </div>
			      <p>Completed Actions: {this.state.completed}</p>
			    </div>

			    {this.state.isCompleted ?
			    	<div className="extra content">
			    		<button onClick={this.isCompleted} className="quotes">Complete</button>
			    	</div>
			    	:
			    <div className="extra content">
			        <button class="ui button" className="accept" onClick={this.updateAccepts}>Accept</button>
			        <button className="decline" onClick={this.untoNext}>Decline</button>
			        <button className="quotes" onClick={this.nextQuote}>Quotes</button>
			    </div>
			    }

			  </div>
			)
		}
	}

export default Home;