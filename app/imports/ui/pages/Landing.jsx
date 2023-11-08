import React from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <>
    <div className="landing-part1">
      <Container id="landing-page" className="mt-5 text-center">
        <Row className="mt-2 pt-4 mb-2 pb-0 mt-sm-0 pt-sm-0 mb-sm-auto pb-sm-0">
          <Col>
            <h2 className="text-center">What is Sustainer?</h2>
            <p>
              {/* eslint-disable-next-line max-len */}
              Single-use takeout containers and food wrappers make up a significant portion—up to one-third—of the debris discovered along Hawai’i&apos;s shorelines. Sustainer is dedicated to tackling this environmental challenge by
              providing a convenient and user-friendly reusable takeout container system. Our aim is to contribute to reducing this prevalent waste and eliminating debrees along Hawai’i&apos;s coastal areas. Join us in making a positive
              impact by adopting our sustainable solution for takeout packaging.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="py-sm-3 py-0" />
      <Container className="my-3 my-sm-0">
        <Row className="justify-content-center mb-2 pb-0 mt-sm-0 pt-sm-0 mb-sm-auto pb-sm-0">
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

    {/* <div className="landing-part2"> */}
    {/*  <Container className="my-md-auto my-sm-auto my-lg-auto mx-sm-auto"> */}
    {/*    <Row className="justify-content-center"> */}
    {/*      <Col lg="auto" md="auto" xs="auto"> */}
    {/*        <Card style={{ width: '14em' }}> */}
    {/*          <Card.Body> */}
    {/*            <Card.Title>Reduce</Card.Title> */}
    {/*            <Card.Text> */}
    {/*              Minimize container loss and enhance the successful implementation of the Full Cycle Takeout program. */}
    {/*            </Card.Text> */}
    {/*          </Card.Body> */}
    {/*        </Card> */}
    {/*      </Col> */}
    {/*      <Col lg="auto" md="auto" xs="auto"> */}
    {/*        <Card style={{ width: '14em' }}> */}
    {/*          <Card.Body> */}
    {/*            <Card.Title>Reuse</Card.Title> */}
    {/*            <Card.Text> */}
    {/*              Establish a streamlined system to guarantee the return of all containers, facilitating their reuse and sustainability. */}
    {/*            </Card.Text> */}
    {/*          </Card.Body> */}
    {/*        </Card> */}
    {/*      </Col> */}
    {/*    </Row> */}
    {/*  </Container> */}
    {/* </div> */}

    <Footer />
  </>
);

export default Landing;
