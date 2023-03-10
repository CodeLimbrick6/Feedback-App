import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, version, type, isDisabled }) {
  const buttonStyle = {};

  return <button className = {`btn btn-${version}`} type = {type} disabled = {isDisabled}>{children}</button>;
}


Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}







