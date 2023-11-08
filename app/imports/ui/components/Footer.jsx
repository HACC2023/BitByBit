import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-lg-2 py-sm-2 mission-footer">
    <Container className="mt-auto pt-4 text-center">
      <h1 className="pb-lg-3">Our Mission</h1>
      <Row className="justify-content-center">
        <Col lg="auto" md="auto" xs="auto">
          <Card className="mission-card rounded-0" style={{ width: '14em' }}>
            <Card.Body>
              <Card.Title>Reduce</Card.Title>
              <Card.Text>
                Minimize container loss and enhance the successful implementation of the Full Cycle Takeout program.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="auto" md="auto" xs="auto">
          <Card className="mission-card rounded-0" style={{ width: '14em' }}>
            <Card.Body>
              <Card.Title>Reuse</Card.Title>
              <Card.Text>
                Establish a streamlined system to guarantee the return of all containers, facilitating their reuse and sustainability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
