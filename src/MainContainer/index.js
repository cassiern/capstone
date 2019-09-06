import React, {Component} from 'react';
import Profile from '../Profile';
import User from '../firebase/user';
import Actions from '../firebase/actions';
import Home from '../Home';
import Quotes from '../firebase/quotes';
import { Route, Switch } from 'react-router-dom';
import Register from '../firebase-regi';

const My404 = () => {
  return (
    <div>
      Looks like your lost!
    </div>
  )
}



//put all logic in here
class MainContainer extends Component{
	constructor(){
		super();
		this.state = {
			isLogged: false,
			username: '',
			quoteOTDay: '',
			actionOTDay: '',
			allActions: [],
			counter: 0,
			currentUser: {
				accept: 0,
				decline: 0	
			},
			canClick: true
		}
	}


fetchingQuote = (updatedQuotes) => {
if(this.state.canClick && this.state.counter < 2){

	for(let i = 0; i < updatedQuotes.length; i++){

	this.setState({
		quoteOTDay: updatedQuotes[i].quote
	});
	// console.log(i, '<-- index # for quotes')
	// console.log(updatedQuotes, '<-- updated quotes in fetch route')
		// if(i === updatedQuotes.length){
		// 	i = 0;
		// 	this.fetchingQuote();
		// }
	} 
}else{
		this.canClick();
	}

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
if(this.state.canClick && this.state.counter < 2){
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

// get randoms isn't fully working....
// need for it to stop at each one and set the state.
// then to wait until button is clicked to go on to the 
// next index for actions only


//clicks on decline and triggers fetchingAction
// i = 0 
fetchingAction = (updatedActions) => {
	// for(let i =0; i < updatedActions.length; i++){

	this.setState({
		allActions: updatedActions,
		actionOTDay: updatedActions[this.state.counter].action
	})	

	console.log(updatedActions, '<-- updatedActions in fetch route')		
		// if(i === updatedActions.length){
		// 	i = 0;
		// 	this.fetchingAction();
		// }
	// }
}
acceptCounter = () => {
	this.setState({
		currentUser: {
			accept: this.state.currentUser.accept + 1
		}
	})
}

	render(){
		console.log(this.state.quoteOTDay, '<-- quoteOTDay in state')
		console.log(this.state.actionOTDay, '<-- actionOTDay in state')
		console.log(this.state.currentUser.accept, '<-- accept in state')
		return(
			<main>
			<Register />
				<Actions fetchingAction={this.fetchingAction}/>
				<Quotes fetchingQuote={this.fetchingQuote}/>
				

				<Switch>
					<Route exact path='/profile' render={(props) => <Profile accept={this.state.currentUser.accept}/> } />
					<Route exact path='/home' render={(props) => <Home quoteOTDay={this.state.quoteOTDay} actionOTDay={this.state.actionOTDay} fetchNextAction={this.fetchNextAction} accept={this.acceptCounter}/>}/>
					<Route component={My404} />
				</Switch>

			</main>
			)
	}
}


export default MainContainer;