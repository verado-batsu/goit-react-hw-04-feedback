import { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { Wrapper } from 'components/App/App.styled';
	
export class App extends Component {
	utils = {
		total: 0,
		positivePercentage: 0
	}

	state = {
		good: 0,
		neutral: 0,
		bad: 0
	}

	handleClick = (e) => {
		const targetName = e.target.name;

		this.setState((prevState) => {
			if (targetName === 'good') {
				this.countPositiveFeedbackPercentage(prevState.good + 1);
			} else {
				this.countPositiveFeedbackPercentage(prevState.good);
			}
			return {
				[targetName]: prevState[targetName] + 1,
			}
		});

		this.countTotalFeedback();
	}

	countTotalFeedback() {
		this.utils.total += 1;
	}

	countPositiveFeedbackPercentage(good) {
		this.utils.positivePercentage = Number(((good * 100) / this.utils.total).toFixed(0));
	}

	render() {
		const namesOfBtn = Object.keys(this.state);
		const statisticsState = Object.entries(this.state);

		const { total, positivePercentage } = this.utils;
		
		return (
			<Wrapper>
				<Section title='Please leave feedback'>
					<FeedbackOptions
						options={namesOfBtn}
						onLeaveFeedback={this.handleClick}
					/>
				</Section>
				
				<Section title="Statistics">
					{total > 0 ? 
						<Statistics
							statisticsState={statisticsState}
							total={total}
							positivePercentage={positivePercentage}
						/> :
						<Notification message="There is no feedback"/>
				}
					
				</Section>
			</Wrapper>
		);
	}
};
