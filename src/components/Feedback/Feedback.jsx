// import React from 'react';

export default function Feedback({ feedback: { good, neutral, bad } }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total</li>
      <li>Positive</li>
    </ul>
  );
}
