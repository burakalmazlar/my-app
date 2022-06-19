import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {

    const {text, num} = props;

    const handleclick = () => {

    }
    return <div>{text} - {num} - <button onClick={() => {alert(num)}}> click</button></div>
}

Header.propTypes = {
    text: PropTypes.string,
    num: PropTypes.number.isRequired
}

Header.defaultProps = {
    num: 0
}

export default Header;