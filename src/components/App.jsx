import React, { useState, useEffect } from 'react';
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

  const handleClick = key => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [key]: prevFeedback[key] + 1,
    }));
  };

  useEffect(() => {
    // Додаткові дії після оновлення стану feedback
    // Наприклад, виведення повідомлення при досягненні певного порогу зворотного зв'язку
    if (feedback.good + feedback.neutral + feedback.bad >= 100) {
      console.log('Дякуємо за багато зворотного зв\'язку!');
    }
  }, [feedback]);

  const total = Object.values(feedback).reduce((acc, el) => acc + el, 0);
  const options = Object.keys(feedback);

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions props={options} handleClick={handleClick} />
        }
      />

      <Section
        title="Statistics"
        children={
          total > 0 ? (
            <Statistics
              props={feedback}
              total={total}
              percentage={(feedback.good / total) * 100}
            />
          ) : (
            <p className={styles.descr}>No feedback given</p>
          )
        }
      />
    </>
  );
}
