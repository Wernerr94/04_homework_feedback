import React, { useReducer } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';

function countFeedback(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + action.payload };
    case 'bad':
      return { ...state, bad: state.bad + action.payload };
    case 'neutral':
      return { ...state, neutral: state.neutral + action.payload };
    default:
      return;
  }
}

export default function FeedbackApp() {
  const [state, dispatch] = useReducer(countFeedback, {
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, bad, neutral } = state;
  function countTotalFeedback() {
    return good + bad + neutral;
  }
  function countPositiveFeedbackPercentage() {
    return ((good / (good + bad + neutral)) * 100).toFixed(0);
  }
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={dispatch} />
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivePercentage={percentage}
          />
        </Section>
      </div>
    </div>
  );
}
