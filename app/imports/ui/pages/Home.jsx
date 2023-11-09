import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import FooterHome from '../components/FooterHome';

/* A simple static component to render some text for the landing page. */
const Home = () => (
  <>
    <div className="landing-part1">
      <Container className="my-5 mb-0 my-md-4 mb-md-4">
        <Row className="justify-content-center mt-2 pb-2 mt-sm-0 pt-sm-0 mb-sm-auto pb-sm-0">
          <Col className="mb-5 mb-md-0" xs="auto">
            <Button className="rounded-0" variant="outline-light" size="lg" href="/qrcode">
              Generate QR Code
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5 pb-4 mt-sm-0 pt-sm-0 mb-sm-auto pb-sm-0">
          <Col className="mt-0 mt-sm-3" xs="auto">
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
