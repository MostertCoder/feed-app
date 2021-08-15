import React from "react";

import Alert from "react-bootstrap/Alert";

const ErrorMessage = (props) => {
  return props.errorMessage.length > 0 ? (
    <Alert className="mb-5 rounded-pill text-center" variant="danger">
      {props.errorMessage}
    </Alert>
  ) : null;
};

export default ErrorMessage;
