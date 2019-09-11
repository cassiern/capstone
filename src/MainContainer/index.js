import React, {Component} from 'react';
import Profile from '../Profile';
import User from '../firebase/user';
import Actions from '../firebase/actions';
import Home from '../Home';
import Quotes from '../firebase/quotes';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from '../firebase-regi';
import NavBar from '../Nav';


const My404 = () => {
  return (
    <div>
      Looks like you're lost!
    </div>
  )
}

//put all logic in here
class MainContainer extends Component{
	constructor(){
		super();
		this.state = {
			isLogged: false,
			quoteOTDay: '',
			actionOTDay: '',
			allActions: [],
			allQuotes: [],
			counter: 0,
			quotesCounter: 0,
			accept: 0,
			acceptedAction: '',
			decline: 0,
			canClick: true,
			username: '',
			user: {},
		}
	}


fetchingQuote = (updatedQuotes) => {
		console.log(updatedQuotes, '<-- updatedQuotes')

// if(this.state.canClick && this.state.counter < 2){

	for(let i = 0; i < updatedQuotes.length; i++){

	this.setState({
		allQuotes: updatedQuotes,
		quoteOTDay: updatedQuotes[this.state.quotesCounter].quote
	});
	// console.log(i, '<-- index # for quotes')
	// console.log(updatedQuotes, '<-- updated quotes in fetch route')
		// if(i === updatedQuotes.length){
		// 	i = 0;
		// 	this.fetchingQuote();
		// }	 
}
}
// fetchingAction = (updatedActions) => {

// 	this.setState({
// 		allActions: updatedActions,
// 		actionOTDay: updatedActions[this.state.counter].action
// 	}) 	

// 	console.log(updatedActions, '<-- updatedActions in fetch route')		
// }
fetchingNextQuote = (e) => {
	let i = this.state.quotesCounter +1;
	let newIndex = (i+1) == this.state.allQuotes.length ? 0 : i++;
		this.setState({
			quoteOTDay: this.state.allQuotes[i].quote,
			quotesCounter: newIndex
		},
		() => {
			console.log(this.state.quotesCounter, '<--this.state.quotesCounter')
		}
		)
}



//function for every 24 hours new quote

componentDidMount(){
	this.settingUser();
}


settingUser = (props) => {
	this.setState({
	username: this.props.user.displayName
})
	console.log(this.props.user.displayName, '<-- user in MainContainer state')
}



canClick = () => {
	if(this.state.counter === 2){
		this.setState({
			canClick: false
		})
		//this will be a modal that says the prompt.
		prompt('Sorry, you reached your limit of declines for today.')
	}
}
fetchNextAction = () => {

if(this.state.canClick){

	let i = this.state.counter +1;
	let newIndex = (i+1) == this.state.allActions.length ? 0 : i++;
		this.setState({
			actionOTDay: this.state.allActions[i].action,
			counter: newIndex
		},
		() => {
			console.log(this.state.counter, '<--this.state.counter')
		}
		)

	}else {
	this.canClick();

}
}

fetchingAction = (updatedActions) => {
	console.log(updatedActions, '<-- UPDATED ACTIONS IN FETCH')
	console.log(typeof(updatedActions), '<-- THE THING')
	this.setState({
		allActions: updatedActions,
		actionOTDay: updatedActions[this.state.counter].action
	}) 	

	console.log(updatedActions, '<-- updatedActions in fetch route')		
}
acceptCounter = () => {
	this.setState({
			accept: this.state.accept + 1,
	})
}



	render(){
		console.log(this.state.quoteOTDay, '<-- quoteOTDay in state')
		console.log(this.state.actionOTDay, '<-- actionOTDay in state')
		console.log(this.state.accept, '<-- accept in state')
		return(
			<main>
			<Quotes fetchingQuote={this.fetchingQuote}/>
			<Actions fetchingAction={this.fetchingAction} />
				<Switch>
					<Route exact path='/' render={() => <Redirect to="/home"/>}/>
					<Route exact path='/profile' render={(props) => <Profile accept={this.state.accept} username={this.state.username} quoteOTDay={this.state.quoteOTDay} actionOTDay={this.state.actionOTDay} /> } />
					<Route exact path='/home' render={(props) => <Home quoteOTDay={this.state.quoteOTDay} actionOTDay={this.state.actionOTDay} fetchNextAction={this.fetchNextAction} image={this.props.image} accept={this.acceptCounter} parentAccepts={this.state.accept} fetchingNextQuote={this.fetchingNextQuote}/>}/>
					<Route component={My404} />
				</Switch>
			<User accepts={this.state.accept} userId={this.props.user.uid} username={this.state.username} fetchingUser={this.fetchingUser}/>

			</main>
			)
	}
}


export default MainContainer;