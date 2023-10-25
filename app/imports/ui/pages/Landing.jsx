import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div>
    <Container id="landing-page" fluid className="py-3 text-center">
      <h1>Reduce, Reuse, Repeat</h1>
    </Container>

    <Container>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary" size="lg" href="/signin">
            Sign In
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="primary" size="lg" href="/signup">
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>

    <Container>
      <br />
      <h2>What is Luau Loop?</h2>
      <p></p>
    </Container>
  </div>
);

export default Landing;
