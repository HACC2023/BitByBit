import React from 'react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Container (Admin) table. See pages/ListContainersAdmin.jsx. */
const ContainerAdmin = ({ container }) => (
  <tr>
    <td>{container._id}</td>
    <td>{container.size}</td>
    <td>{container.owner}</td>
  </tr>
);

// Require a document to be passed to this component.
ContainerAdmin.propTypes = {
  container: PropTypes.shape({
    size: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default ContainerAdmin;
