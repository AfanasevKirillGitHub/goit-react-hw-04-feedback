import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        {options.map(option => (
          <button key={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

export default FeedbackOptions;
