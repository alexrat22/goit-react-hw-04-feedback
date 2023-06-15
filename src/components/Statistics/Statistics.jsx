import PropTypes from 'prop-types';
import {
  Container,
  FeedbackTypeContainer,
  FeedbackType,
  FeedbackTotal,
  FeedbackStat,
} from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <Container>
      <FeedbackTypeContainer>
        <FeedbackType>Good: {good}</FeedbackType>
        <FeedbackType>Neutral: {neutral}</FeedbackType>
        <FeedbackType>Bad: {bad}</FeedbackType>
      </FeedbackTypeContainer>
      <FeedbackTotal>Total: {total}</FeedbackTotal>
      <FeedbackStat>Positive feedbacks: {percentage} %</FeedbackStat>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
