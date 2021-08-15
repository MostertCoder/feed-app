import React from "react";

import { RiLogoutCircleFill } from "react-icons/ri";

const BackButton = () => {
  return (
    <a href="/" className="float-right btn btn-outline-light rounded-pill">
      <RiLogoutCircleFill /> back
    </a>
  );
};

export default BackButton;
