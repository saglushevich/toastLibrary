import { Component } from "react";
import PropTypes from "prop-types";

import ErrorMessage from "./styled";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { state, props } = this;

    if (state.hasError) {
      return <ErrorMessage>Something went wrong!</ErrorMessage>;
    }

    return props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ErrorBoundary;
