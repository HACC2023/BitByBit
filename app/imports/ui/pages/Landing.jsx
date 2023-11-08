import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import QrCodeScanner from '../components/QRCodeScanner';

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
      <div>
        <input type="text" id="text-input" placeholder="Enter text or URL" />
      </div>

      <QrCodeScanner />
    </Container>

    <Container>
      <br />
      <h2>What is Luau Loop?</h2>
      <p>
        Single-use takeout containers and food wrappers account for up to one-third
        of the debris found on Hawai’i’s shorelines! Luau Loop helps to address this
        issue by offering an easy to use reusable takeout container
        system.
      </p>
    </Container>
  </div>
);

export default Landing;
