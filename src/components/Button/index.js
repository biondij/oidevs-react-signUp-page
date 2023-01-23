import { PropTypes } from "prop-types";

const Button = ({ text, handleClick }) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    aoClicar: PropTypes.func,
};

export default Button;