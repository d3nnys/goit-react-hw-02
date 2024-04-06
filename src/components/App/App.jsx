import { useState } from 'react';
import './App.css';
import 'modern-normalize';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setClicks(Feedback => ({
      ...Feedback,
      [feedbackType]: Feedback[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedback={clicks} />
    </div>
  );
}
