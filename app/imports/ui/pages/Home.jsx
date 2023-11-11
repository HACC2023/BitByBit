import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import FooterHome from '../components/FooterHome';

/* A simple static component to render some text for the landing page. */
const Home = () => (
  <>
    <div className="landing-part1">
      <Container className="">
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="my-3">
            <Button className="rounded-0" variant="outline-light" size="lg" href="/qrcode">
              Generate QR Code
            </Button>
          </Col>
          <Col xs="auto">
            <Button className="rounded-0" variant="light" size="lg" href="/signup">
              Choose Payment Method
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    <FooterHome />
  </>
);

export default Home;
