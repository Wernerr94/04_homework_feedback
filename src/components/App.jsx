import React from 'react';
import FeedbackApp from './FeedbackOnHOOK/FeedbackApp/FeedbackApp';
import PhonebookApp from './PhonebookOnHOOK/PhonebookApp/PhonebookApp';
import ImageFinderApp from './ImageFinderOnHOOK/ImageFinderApp/ImageFinderApp';

export const App = () => {
  return (
    <div>
      <FeedbackApp />
      <PhonebookApp />
      <ImageFinderApp />
    </div>
  );
};
