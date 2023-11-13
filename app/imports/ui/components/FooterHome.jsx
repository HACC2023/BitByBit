import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const FooterHome = () => (
  <footer>
    <Container className="mission-footer text-center">
      <h1 className="mt-3 pb-lg-3">FAQ</h1>
      <Row xs={1} sm={2} className="justify-content-center mb-5">
        <Col xs="auto" sm="auto" md="auto" lg="auto">
          <Card className="mission-card" style={{ width: '14em' }}>
            <Card.Body>
              <Card.Title>How do I begin ordering?</Card.Title>
              <Card.Text>
                Click on &quot;Generate QR Code&quot; and have your QR code scanned to begin ordering.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" sm="auto" md="auto" lg="auto">
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
