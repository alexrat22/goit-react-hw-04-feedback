import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './App.styled';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (goodFeedBack, totalFeedBack) => {
    return Math.round((goodFeedBack / totalFeedBack) * 100);
  };

  const totalFeedBacks = countTotalFeedback();
  const typeOfFeedback = [good, neutral, bad];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={typeOfFeedback}
          onLeaveFeedback={onLeaveFeedback}
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
            percentage={countPositiveFeedbackPercentage(good, totalFeedBacks)}
          />
        )}
      </Section>
    </Container>
  );
}
