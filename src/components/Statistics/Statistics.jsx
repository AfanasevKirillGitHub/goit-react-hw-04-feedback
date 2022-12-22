import { PropTypes } from "prop-types";
import Box from "components/Box/Box";
import { StatisticsList, StatisticItem, StatisticText, TotalFeedbackList, TotalFeedbacItem, TotalFeedbacText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box>
      <Box>
        <StatisticsList>
          <StatisticItem>
            <StatisticText>Good: {good}</StatisticText>
          </StatisticItem>
          <StatisticItem>
            <StatisticText>Neutral: {neutral}</StatisticText>
          </StatisticItem>
          <StatisticItem>
            <StatisticText>Bad: {bad}</StatisticText>
          </StatisticItem>
        </StatisticsList>
      </Box>
      <Box>
        <TotalFeedbackList>
          <TotalFeedbacItem>
            <TotalFeedbacText>Total: {total}</TotalFeedbacText>
          </TotalFeedbacItem>
          <TotalFeedbacItem>
            <TotalFeedbacText>Positive feedback: {positivePercentage}%</TotalFeedbacText>
          </TotalFeedbacItem>
        </TotalFeedbackList>
      </Box>
    </Box>

  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
