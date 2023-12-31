import React from "react";
import { Container, Col, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({setAuthenticate, setLoginState}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    setLoginState("로그아웃")
    navigate("/")
  }

  return (
    <div>
      <Container className="login-area">
        <Form className="login-form" onSubmit={(event)=>{loginUser(event)}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
