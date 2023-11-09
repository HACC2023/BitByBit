import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Col, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill, Recycle } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" expand="sm">
      <Container>
        <Col lg={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} xs={4} className="justify-content-center text-center">
          <Navbar.Brand as={NavLink} to="/">
            {/* eslint-disable-next-line react/style-prop-object */}
            <h2 className="mt-3 mt-sm-4 mb-0">Sustainer <Recycle /></h2>
          </Navbar.Brand>
        </Col>
        <Col lg={{ span: 1 }} md={{ span: 2, offset: 1 }} xs={2} className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              {currentUser === '' ? (
                <NavDropdown id="login-dropdown" title="Login">
                  <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                    <PersonFill />
                    Sign
                    in
                  </NavDropdown.Item>
                  <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                    <PersonPlusFill />
                    Sign
                    up
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown id="navbar-current-user" title={currentUser}>
                  <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                    <BoxArrowRight />
                    {' '}
                    Sign
                    out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {currentUser ? ([
                <Nav.Link id="add-stuff-nav" as={NavLink} to="/add" key="add">Add Stuff</Nav.Link>,
                <Nav.Link id="list-stuff-nav" as={NavLink} to="/list" key="list">List Stuff</Nav.Link>,
              ]) : ''}
              {Roles.userIsInRole(Meteor.userId(), 'admin') ? ([
                <Nav.Link id="list-containers-admin" as={NavLink} to="/admin-list" key="admin">Containers List</Nav.Link>,
                <Nav.Link id="scan-containers" as={NavLink} to="/scan" key="admin">Scan Containers</Nav.Link>,
              ]) : ''}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
