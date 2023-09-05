import React from "react";
import PropTypes from "prop-types";

function Container(props) {
  return <section className="container">{props.children}</section>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
