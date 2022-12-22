import { PropTypes } from 'prop-types';
import Box from 'components/Box/Box';
import {
  BsEmojiAngryFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiHeartEyesFill,
} from 'react-icons/bs';
import { FaPercentage } from 'react-icons/fa';
import {
  StatisticsList,
  StatisticItem,
  StatisticText,
  TotalFeedbackList,
  TotalFeedbacItem,
  TotalFeedbacText,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box ml={40} mt={20}>
      <Box>
        <StatisticsList>
          <StatisticItem>
            <StatisticText>
              {' '}
              <BsFillEmojiHeartEyesFill color="green" /> Good: {good}
            </StatisticText>
          </StatisticItem>
          <StatisticItem>
            <StatisticText>
              {' '}
              <BsFillEmojiNeutralFill color="yellow" /> Neutral: {neutral}
            </StatisticText>
          </StatisticItem>
          <StatisticItem>
            <StatisticText>
              {' '}
              <BsEmojiAngryFill color="red" /> Bad: {bad}
            </StatisticText>
          </StatisticItem>
        </StatisticsList>
      </Box>
      <Box mt={20}>
        <TotalFeedbackList>
          <TotalFeedbacItem>
            <TotalFeedbacText>Total: {total}</TotalFeedbacText>
          </TotalFeedbacItem>
          <TotalFeedbacItem>
            <TotalFeedbacText>
              Positive feedback: {positivePercentage}
              <FaPercentage />
            </TotalFeedbacText>
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
