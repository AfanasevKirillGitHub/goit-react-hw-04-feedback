
import  { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const selectedButton = event.currentTarget.innerText;
    this.setState(prevState => ({
      [selectedButton]: prevState[selectedButton] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const countPercent = positiveFeedback
      ? Math.ceil((positiveFeedback * 100) / this.countTotalFeedback())
      : 0;
    return countPercent;
  };

  render() {
    return (
      <div className="Container">
        <h2 className="Title">Please leave feedback</h2>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        
        <div>
          <h2 className="Title">Statistics</h2>
          <Notification message={"No feedback given"}/>
        </div>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

