import React from "react";

import PropTypes from "prop-types";
const ContactsItem = ({ id, name, number, deleteFunc }) => (
  <li key={id}>
    <p>
      {name}:{number}
    </p>
    <button type="button" onClick={deleteFunc}>
      Delete
    </button>
  </li>
);
ContactsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteFunc: PropTypes.func.isRequired,
};
export { ContactsItem };
