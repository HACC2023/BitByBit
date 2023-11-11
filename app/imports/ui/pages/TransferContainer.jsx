import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Containers } from '../../api/container/Containers';

const bridge = new SimpleSchema2Bridge(Containers.schema);

// Following scenarios for ownership transfer:
// 1. When admin scans to add into Containers DB
// 2. When vendor fills in order form to get containers (admin --> vendor)
// 3. When vendor scans a container for a user to use (vendor --> user)
// 4. Scanning back in after return by a organization worker (user --> admin)

/* Renders the page for editing a single document. */
const EditContainers = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditContainers', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Container documents.
    const subscription = Meteor.subscribe(Containers.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Containers.collection.find({}).fetch();
    return {
      doc: document,
      ready: rdy,
    };
  }, []);
  // console.log('EditContainers', doc, ready);
  // On successful reading scan, insert the data.
  const submit = (scannedQR) => {
    const { owner } = scannedQR;
    const user = Meteor.users.findOne(_id);
    const foundContainer = Containers.collection.findOne(_id);
    Containers.collection.update(_id, { $set: { owner } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal(`Container now belongs to ${user.firstName} ${user.lastName})`, 'Scanned successfully!', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Scan a Container</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <h2>Which container to scan?</h2>
                <SelectField name="uniqueID" />
                <h2>Who transferring to?</h2>
                <TextField name="owner" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditContainers;
