import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GreetingHeader from "../components/GreetingHeader";
import Feed from "../components/Feed";

const FeedScreen = (props) => {
  return (
    <Container className="min-vh-100 vw-100 m-0 p-0 bg-light" fluid>
      <GreetingHeader
        name={props.user.name}
        followsCount={props.user.followsCount}
      />

      <Row className="pb-5">
        <Col md="4">{/* Spacer */}</Col>
        <Col md="4">
          <Feed tweets={props.tweets} />
        </Col>
        <Col md="4">{/* Spacer */}</Col>
      </Row>
    </Container>
  );
};

export default FeedScreen;
