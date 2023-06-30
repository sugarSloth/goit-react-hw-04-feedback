import React from "react";
import { PropTypes } from "prop-types";
import styles from './Statistics.module.css';

export default function Statistics({ props, total, percentage }) {
  const options = Object.entries(props);

  return (
    <React.Fragment>
          {options.map(([option, value]) => (
            <li key={option} className={styles.item}>
              {option}: <span className={styles.number}>{value}</span>
            </li>
          ))}
          <li key="total" className={styles.item}>
            Total: <span className={styles.number}>{total()}</span>
          </li>
          <li key="positive" className={styles.item}>
            Positive feedback: <span className={styles.number}>{percentage()}%</span>
          </li>
        </React.Fragment>
    
  );
}

Statistics.propTypes = {
  props: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  percentage: PropTypes.func.isRequired,
};
