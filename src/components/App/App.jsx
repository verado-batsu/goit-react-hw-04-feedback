import { useState } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

import { Wrapper } from 'components/App/App.styled';

export function App() {
    const utils = {
        total: 0,
        positivePercentage: 0,
    };

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    function handleClick(e) {
        const targetName = e.target.name;

        if (targetName === 'good') {
            setGood(prevGood => {
                countPositiveFeedbackPercentage(prevGood + 1);
                return prevGood + 1;
            });
        } else if (targetName === 'neutral') {
            setNeutral(prevNeutral => {
                countPositiveFeedbackPercentage(good);
                return prevNeutral + 1;
            });
        } else {
            setBad(prevBad => {
                countPositiveFeedbackPercentage(good);
                return prevBad + 1;
            });
        }

        countTotalFeedback();
    }

    function countTotalFeedback() {
        utils.total += 1;
    }

    function countPositiveFeedbackPercentage(good) {
        utils.positivePercentage = Number(
            ((good * 100) / this.utils.total).toFixed(0)
        );
    }

    const { total, positivePercentage } = utils;

    const statisticsState = {
        good,
        neutral,
        bad,
    };

    const namesOfBtn = Object.keys(statisticsState);
    const statisticsStateEntries = Object.entries(statisticsState);

    return (
        <Wrapper>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={namesOfBtn}
                    onLeaveFeedback={handleClick}
                />
            </Section>

            <Section title="Statistics">
                {total > 0 ? (
                    <Statistics
                        statisticsState={statisticsStateEntries}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </Wrapper>
    );
}
