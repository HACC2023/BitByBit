import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <>
    <div className="landing-part1">
      <Container id="landing-page" fluid className="py-3 text-center">
        <h1>Reduce, Reuse, Repeat</h1>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col className="g-0" xs="auto">
            <Button className="rounded-0" variant="outline-light" size="lg" href="/signin">
              Sign In
            </Button>
          </Col>
          <Col className="g-0" xs="auto">
            <Button className="rounded-0" variant="light" size="lg" href="/signup">
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="landing-part2">
      <Container className="my-md-auto my-sm-auto my-lg-auto mx-sm-auto">
        <Row>
          <Col>
            <h2>What is Sustainer?</h2>
            <p>
              Single-use takeout containers and food wrappers account for up to one-third
              of the debris found on Hawai’i’s shorelines! Sustainer helps to address this
              issue by offering an easy to use reusable takeout container
              system.
            </p>
          </Col>
        </Row>
        <Row />
      </Container>
    </div>
  </>
);

export default Landing;
