import { Component } from 'react';
import React from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import styles from './Statistics/Statistics.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    const { countTotalFeedback } = this;
    const options = Object.keys(this.state);
    const total = countTotalFeedback();
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions props={options} handleClick={this.handleClick} />
          }
        />

        <Section
          title="Statistics"
          children={
            total > 0 ? (
              <Statistics
                props={this.state}
                total={this.countTotalFeedback}
                percentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <p className={styles.descr}>No feedback given</p>
            )
          }
        />
      </>
    );
  }
}
