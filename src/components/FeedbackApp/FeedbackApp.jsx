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

// export default class FeedbackApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = e => {
//     setState(prevState => {
//       return { [e]: prevState[e] + 1 };
//     });
//   };
//   countTotalFeedback = (x, y, z) => {
//     return x + y + z;
//   };
//   countPositiveFeedbackPercentage = (x, y, z) => {
//     return ((x / (x + y + z)) * 100).toFixed(0);
//   };
//   render() {
//     const { good, neutral, bad } = state;

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={state}
//             onLeaveFeedback={leaveFeedback}
//           />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={countTotalFeedback(good, neutral, bad)}
//             positivePercentage={countPositiveFeedbackPercentage(
//               good,
//               neutral,
//               bad
//             )}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
