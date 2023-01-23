import { PropTypes } from "prop-types";

const Input = (props) => {
    return (
        <div class="inputForm">
            <label for="input"  >{props.label}</label>
            <input name="input" onChange={props.onChange} />
        </div>
    )
}

Input.propType = {
    label: PropTypes.string,
    aoMudar: PropTypes.func,
}

export default Input;