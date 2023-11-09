import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const FooterHome = () => (
  <footer className="mt-5 py-5 mt-sm-2 py-sm-2 mission-footer">
    <Container className="mt-5 pt-5 mt-sm-0 pt-sm-0 mt-lg-1 pt-lg-0 text-center">
      <h1 className="pb-lg-3">FAQ</h1>
      <Row className="justify-content-center mb-5 mb-md-0">
        <Col lg="auto" md="auto" xs="auto">
          <Card className="mission-card rounded-0" style={{ width: '14em' }}>
            <Card.Body>
              <Card.Title>How do I begin ordering?</Card.Title>
              <Card.Text>
                Click on &quot;Generate QR Code&quot; and have your QR code scanned to begin ordering.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="auto" md="auto" xs="auto">
          <Card className="mission-card rounded-0" style={{ width: '14em' }}>
            <Card.Body>
              <Card.Title>How do I pay?</Card.Title>
              <Card.Text>
                First, click on &quot;Choose Payment Method&quot; to select a payment method, and then provide the necessary details to complete your payment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterHome;
