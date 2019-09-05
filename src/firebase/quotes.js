import React, {Component} from 'react';
import database from './firebase';
 
class Quotes extends Component{
	constructor(props)
	{
		super(props);
	}

	componentDidMount(){
		const quotes = []
		database.ref('quotes').set({
			quote1: {
			id: 1,
				quote: 'What you declare, you will achieve.'	
			},
			quote2: {	
			id: 2,
				quote:'To accomplish great things, we must not only act, but also dream, not only plan, but also believe. -Anatole France'
			},
			quote3: {
			id: 3,
				quote: 'When you think you cannot, revisit a previous triumph. -Jack Canfield'
			},
			quote4: {
			id: 4,
				quote: 'Sometimes things become possible if we want them bad enough. -T.S. Eliot'
			},
			quote5: {
			id: 5,
				quote: 'To be a leader, you must stand for something, or you will fall for anything. -Anthony Pagano'
			},
			quote6: {
			id: 6,
				quote: 'Do you not get is? This very second you could be doing something you love and dream about doing. So do it! NOW!'
			},
			quote7: {
			id: 7,
				quote: 'Courage is facing your fears. Stupidity is fearing nothing. -Todd Bellemare'
			},
			quote8: {
			id: 8,
				quote: 'The spirit, the will to win, and the will to excel are the things that endure. These qualities are so much more important than the events that occur. -Vince Lombardi'
			},
			quote9: {
			id: 9,
				quote: 'Victory is always possible for the person who refuses to stop fighting. -Napoleon Hill'
			},
			quote10: {
			id: 10,
				quote: 'People become successful the minute they decide to. -Harvey Mackay'
			},
			quote11: {
			id: 11,
				quote: 'Winning is not a "sometime" thing. You do not win once in a awhile, you do not do things right once in awhile, you do them right all of the time. Winning is a habit, unfortunately, so is losing. -Vince Lombardi'
			},
			quote12: {
			id: 12,
				quote: 'Good things come to those who hustle while they wait.'
			},
			quote13: {
			id: 13,
				quote: 'The fastest way to pass your own expectations is to add passion to your labor. -Mike Litman'
			},
			quote14: {
			id: 14,
				quote: 'To be a champion, you have to believe in yourself when nobody else will. -Sugar Ray Robinson'
			},
			quote15: {
			id: 15,
				quote: 'Society may predict, but only I can determine my destiny. -Clair Oliver'
			},
			quote16: {
			id: 16,
				quote: 'If we are to achieve results never before accomplished, we must expect to employ methods never before attempted. -Francis Bacon'
			},
			quote17: {
				id: 17,
				quote: 'Success is more attitude than aptitude.'
			},
			quote18: {
				id: 18,
				quote: 'I have tried 99 times and have failed, but on the 100th time came success. -Albert Einstein'
			},
			quote19: {
				id: 19,
				quote: 'There is always a better way. -Thomas Edison'
			},
			quote20: {
				id: 20,
				quote: 'The habit of persistence is the habit of victory. -Herbert Kaufman'
			},
			quote21: {
				id: 21,
				quote: 'You either walk inside your story and own it or you stand outside your story and hustle for your worthiness. -Brene Brown'
			},
			quote22: {
				id: 22,
				quote: 'What is the greater risk? Letting go of what people think - or letting go of how I feel, what I believe, and who I am? - Brene Brown'
			},
			quote23: {
				id: 23,
				quote: 'I do not have to chase extraordinary moments to find happiness - it is right in front of me if I am paying attention and practicing gratitude. - Brene Brown'
			},
			quote24: {
				id: 24,
				quote: 'Talk to yourself like you would to someone you love. -Brene Brown'
			},
			quote25: {
				id: 25,
				quote: 'I want to be in the arena. I want to be brave with my life. And when we make the choice to dare greatly, we sign up to get our a$$ kicked. We can choose courage or we can choose comfort, but we cannot have both. Not at the same time. -Brene Brown'
			},
			quote26: {
				id: 26,
				quote: 'Vulnerability is not winning or losing; it is having the courage to show up and be seen when we have no contol over the outcome. -Brene Brown'
			},
			quote27: {
				id: 27,
				quote: 'Let go of who you think you are suppose to be; embrace who you are. - Brene Brown'
			},
			quote28: {
				id: 28,
				quote: 'Sometimes the bravest and most important thing you can do is just show up. -Brene Brown'
			},
			quote29: {
				id: 29,
				quote: 'We do not have tto all of it alone. We were never meant to. -Brene Brown'
			},
			quote30: {
				id: 30,
				quote: 'Shame corrodes the very partr of us that believes we are capable of change. -Brene Brown'
			}

		})


// Doesn't do anything yet..
// Only show this data, no creating/deleting/editing. Just no. Touchy. Only look.
const updatedQuotes = [];
	database.ref('quotes').on('value', (snapshot) => {
			console.log(typeof snapshot, '<-- snapshot type')

			snapshot.forEach((childSnapShot) => {
				updatedQuotes.push({
					id: childSnapShot.key,
					...childSnapShot.val()
				})
			})
		})
	console.log(updatedQuotes, '<-- updatedQuotes')
	 	this.props.fetchingQuote(updatedQuotes)

}



	render(){
		return(
			<div>
			</div>

			)
	}
}



export default Quotes;