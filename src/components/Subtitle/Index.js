import { PropTypes } from "prop-types";

const Subtitle = props => {
    return <h2>{props.text}</h2>;
}

Subtitle.propTypes = {
    text: PropTypes.string,
}
export default Subtitle;