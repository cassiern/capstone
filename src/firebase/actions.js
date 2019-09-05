import React, {Component} from 'react';
import database from './firebase';

class Actions extends Component{
	componentDidMount(){
		const actions = []
		database.ref('actions').set({
			action1: {
				id: 1,
				action: 'Skip at your workplace for at least 30 seconds.'
			},
			action2: {
				id: 2,
				action: 'Focus on being productive, not busy. Take 10-15 minutes to journal out what you want to get done today. Try to knock out high priority and urgent off first! You will feel so good once you have finished it!'
			},
			action3: {
				id: 3,
				action: 'Pack a picnic lunch, a good book and head for a scenic drive. Stop somewhere along the way and enjoy a nice picnic in nature. For a little extra fun take a friend with you and maybe a board game.'
			},
			action4: {
				id: 4,
				action: 'Try something new! Ever been paddle boarding? Rent one from the nearest lake and take it out for a few hours. What about a pottery class? Or maybe some Salsa lessons!'
			},
			action5: {
				id: 5,
				action: 'Get lost. Take a random route and catch the sunset/rise somewhere random.'
			},
			action6: {
				id: 6,
				action: 'Find a hiking path nearby that you have never hiked before.'
			},
			action7: {
				id: 7,
				action: 'Wear something that is beyond your own comfort zone today. Whether that’s a certain color or a certain style.'
			},
			action8: {
				id: 8,
				action: 'Spend a day (or even a couple of hours) working in a department or role that you have never done before. It is interesting to walk in anothers shoes to see what their job is actually like.'
			},
			action9: {
				id: 9,
				action: 'Wear wacky clothes, big shades and go on a long bike ride around town. (Do not forget a helmet!)'
			},
			action10: {
				id: 10,
				action: 'If you happen to be in a drive through coffee shop or fast food pay for the person behind you. It will definitely make their day.'
			},
			action11: {
				id: 11,
				action: 'Leave someone a hidden note telling them how much you appreciate them.'
			},
			action12: {
				id: 12,
				action: 'Visit/call an elderly family member.'
			},
			action13: {
				id: 13,
				action: 'Write down the things you did and learned so far this week.'
			},
			action14: {
				id: 14,
				action: 'Take a few minutes to create a running note of gift ideas for ppl from your day-to-day conversations, whether for birthdays or holidays. It doesn’t matter how big or small the item it is. Jot down whatever and whoever comes to mind.'
			},
			action15: {
				id: 15,
				action: 'Take ten minutes to set a short term goal that you can accomplish for today.'
			},
			action16: {
				id: 16,
				action: 'Find time to do a 10-30 minute workout. If the former President Obama had time to do it during his presidency, so do you!'
			},
			action17: {
				id: 17,
				action: 'Before you go to bed, go on a 15 minute walk/ bike ride.'
			},
			action18: {
				id: 18,
				action: 'Set a timer for 5 minutes to not think about your day. Think about things your grateful for, your family, anything other than what needs to be done today.'
			},
			action19: {
				id: 19,
				action: 'If you have free downtime, instead of looking at social media or the tv, read a book/article that has to do with your industry/job/interests.'
			},
			action20: {
				id: 20,
				action: 'Find a motivational podcast to listen to on your way to work or at lunch.'
			},
			action21: {
				id: 21,
				action: 'Anytime you talk on the phone today, get up and walk around while on the phone.'
			},
			action22: {
				id: 22,
				action: 'Say hello to 5 poeple that you do not know today.'
			},
			action23: {
				id: 23,
				action: 'Ask someone who is a rank above you and ask for advice.'
			},
			action24: {
				id: 24,
				action: 'Go see a movie by yourself.'
			},
			action25: {
				id: 25,
				action: 'Find a small DIY project to do today.'
			},
			action26: {
				id: 26,
				action: 'Paint a picture on canvas, and have it hang up for a least a week in your home.'
			},
			action27: {
				id: 27,
				action: 'Try yoga today! Whether through a class or Youtube.'
			},
			action28: {
				id: 28,
				action: 'Clean up a space. Could as much as the whole house, or as little as a desk.'
			},
			action29: {
				id: 29,
				action: 'Sing out loud and proud on your way to work today!'
			},
			action30: {
				id: 30,
				action: 'List 50, yes 50, things that you are grateful for.'
			}

		})

const updatedActions = [];
	database.ref('actions').on('value', (snapshot) => {
			console.log(typeof snapshot, '<-- snapshot type')

			snapshot.forEach((childSnapShot) => {
				updatedActions.push({
					id: childSnapShot.key,
					...childSnapShot.val()
				})
			})
		})
	console.log(updatedActions, '<-- updatedActions')

	 	this.props.fetchingAction(updatedActions)

}

	render(){
		return(
			<div>
			</div>

			)
	}
}

export default Actions;