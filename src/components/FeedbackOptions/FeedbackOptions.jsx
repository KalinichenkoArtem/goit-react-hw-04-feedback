import React from 'react';
import PropTypes from 'prop-types';
import { OptionsContainer, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {Object.keys(options).map(option => (
        <FeedbackBtn
          key={option}
          value={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackBtn>
      ))}
    </OptionsContainer>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
