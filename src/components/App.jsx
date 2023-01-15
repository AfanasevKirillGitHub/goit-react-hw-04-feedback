// import { Component } from 'react';
import Box from './Box/Box';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = event => {
    const selectedButton = event.currentTarget.innerText;

    switch (selectedButton) {
      case 'good':
        setGood(prev => (prev += 1));
        break;

      case 'neutral':
        setNeutral(prev => (prev += 1));
        break;

      case 'bad':
        setBad(prev => (prev += 1));
        break;

      default:
        console.log('error');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = good;
    const countPercent = positiveFeedback
      ? Math.ceil((positiveFeedback * 100) / countTotalFeedback())
      : 0;
    return countPercent;
  };

  return (
    <Box mt={50}>
      <Section mt={50} title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
    </Box>
  );
};
