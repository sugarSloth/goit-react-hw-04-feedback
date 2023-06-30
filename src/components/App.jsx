import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import styles from './Statistics/Statistics.module.css';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = (key) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, el) => acc + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * feedback.good);
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <>
      <Section
        title="Please leave feedback"
        children={<FeedbackOptions options={options} handleClick={handleClick} />}
      />

      <Section
        title="Statistics"
        children={
          total > 0 ? (
            <Statistics
              stats={feedback}
              total={countTotalFeedback}
              percentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <p className={styles.descr}>No feedback given</p>
          )
        }
      />
    </>
  );
}
