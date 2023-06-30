import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions ({ options, handleClick }) {
    return (
        <>
        {options.map(option => <li key={option} className={css.item}>
            <button className={css.button} onClick={() => handleClick(option)}>{option}</button>
        </li>)}
        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    handleClick: PropTypes.func,
}
