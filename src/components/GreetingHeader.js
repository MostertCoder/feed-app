import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

import BackButton from "./BackButton";

const GreetingHeader = (props) => {
  return (
    <Jumbotron className="bg-dark text-light rounded-0">
      <BackButton />

      <h1 className="mt-4 display-2">
        Hi, <span className="text-warning">{props.name}</span>
      </h1>
      <h2 className="display-4">
        This is what the{" "}
        <span className="text-warning">{props.followsCount}</span> friend(s) you
        follow tweeted.
      </h2>
    </Jumbotron>
  );
};

export default GreetingHeader;
