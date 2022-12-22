import PropTypes from 'prop-types';
import Box from 'components/Box/Box';
import { FeedbackList, FeedbackItem, FeedbackButton } from "./FeedbackOptions.styled"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      <FeedbackList>
        {options.map(option => (
          <FeedbackItem key={option} >  <FeedbackButton onClick={onLeaveFeedback}>
            {option}
          </FeedbackButton></FeedbackItem>
        ))}
      </FeedbackList>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default FeedbackOptions;
