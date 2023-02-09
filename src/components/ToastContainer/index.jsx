import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import Portal from "components/Portal";
import ErrorBoundary from "components/ErrorBoundary";
import ToastsList from "components/ToastsList";
import { getPositions } from "utils";
import { useToasts } from "hooks";
import { THEMES } from "constants";

export function ToastContainer() {
  const [topRight, topLeft, bottomLeft, bottomRight] = getPositions(
    useToasts()
  );

  return (
    <ThemeProvider theme={THEMES}>
      <ErrorBoundary>
        <Portal>
          <ToastsList position="top-right" toasts={topRight} />
          <ToastsList position="top-left" toasts={topLeft} />
          <ToastsList position="bottom-right" toasts={bottomRight} />
          <ToastsList position="bottom-left" toasts={bottomLeft} />
        </Portal>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

ToastContainer.propTypes = {
  toasts: PropTypes.array,
};
