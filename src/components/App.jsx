import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = objectKey => {
    this.setState(prevState => {
      return { [objectKey]: prevState[objectKey] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (goodFeedBack, totalFeedBack) => {
    return Math.round((goodFeedBack / totalFeedBack) * 100);
  };

  render() {
    const totalFeedBacks = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedBacks === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedBacks}
              percentage={this.countPositiveFeedbackPercentage(
                this.state.good,
                totalFeedBacks
              )}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
