import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WelcomeImage from "../components/WelcomeImage";
import WelcomeHeader from "../components/WelcomeHeader";
import UserForm from "../components/UserForm";
import ErrorMessage from "../components/ErrorMessage";

const LandingScreen = (props) => {
  return (
    <Container className="vh-100 vw-100 m-0" fluid>
      <Row>
        <Col md="6">
          <WelcomeImage />
        </Col>
        <Col md="3">
          <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <WelcomeHeader />

            <div className="w-100">
              <ErrorMessage errorMessage={props.errorMessage} />
              <UserForm fetchUser={props.fetchUser} loading={props.loading} />
            </div>
          </div>
        </Col>
        <Col md="3">{/* Spacer */}</Col>
      </Row>
    </Container>
  );
};

export default LandingScreen;
