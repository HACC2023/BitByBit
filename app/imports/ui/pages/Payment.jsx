import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';

const App = () => (
  <Container
    className="py-5"
    fluid
    style={{
      background: 'url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp) no-repeat center center fixed',
      backgroundSize: 'cover',
    }}
  >
    <Row className="d-flex justify-content-center">
      <Col md="10" lg="8" xl="5">
        <Card className="rounded-3">
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h3>Settings</h3>
              <h6>Payment</h6>
            </div>
            <p className="fw-bold mb-4 pb-2">Saved cards:</p>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <Image
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
              <div className="flex-fill mx-3">
                <Form.Group className="form-outline">
                  <Form.Control
                    type="text"
                    size="lg"
                    value="**** **** **** 3193"
                  />
                </Form.Group>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <Image
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/visa.png"
              />
              <div className="flex-fill mx-3">
                <Form.Group className="form-outline">
                  <Form.Control
                    type="text"
                    size="lg"
                    value="**** **** **** 4296"
                  />
                </Form.Group>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <p className="fw-bold mb-4">Add new card:</p>
            <Form.Group className="form-outline">
              <Form.Control type="text" size="lg" value="Anna Doe" />
            </Form.Group>
            <Row className="my-4">
              <Col xs="7">
                <Form.Group className="form-outline">
                  <Form.Control
                    type="text"
                    size="lg"
                    value="1234 5678 1234 5678"
                  />
                </Form.Group>
              </Col>
              <Col xs="3">
                <Form.Group className="form-outline">
                  <Form.Control
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </Form.Group>
              </Col>
              <Col xs="2">
                <Form.Group className="form-outline">
                  <Form.Control type="password" size="lg" placeholder="CVV" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="success" size="lg" block>
              Add card
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default App;
