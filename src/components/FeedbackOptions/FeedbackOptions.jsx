import React from 'react';
import PropTypes from 'prop-types';
import { Button, Options } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Options>
      {Object.keys(options).map(el => (
        <Button
          key={el}
          onClick={() => onLeaveFeedback({ type: el, payload: 1 })}
        >
          {el}
        </Button>
      ))}
    </Options>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
