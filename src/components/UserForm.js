import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { RiLoginCircleFill } from "react-icons/ri";

const UserForm = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length > 0) {
      props.fetchUser(name);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          className="rounded-pill text-center"
          size="lg"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        className="rounded-pill"
        variant="dark"
        size="lg"
        type="submit"
        block
      >
        <RiLoginCircleFill /> Go
      </Button>
    </Form>
  );
};

export default UserForm;
