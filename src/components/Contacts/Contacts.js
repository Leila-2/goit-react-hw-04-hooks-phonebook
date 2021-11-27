import React from "react";
import { Section } from "../Section/Section";
import { ContactsItem } from "./ContactsItem";
import s from "./Contacts.module.css";

import PropTypes from "prop-types";
const Contacts = ({ contacts, deleteHandler }) => (
  <Section title="Contacts">
    <ul className={s.list}>
      {contacts.length === 0 ? (
        <h3>Please add contact</h3>
      ) : (
          contacts.map(({ name, id, number }) => (
            <ContactsItem
              deleteFunc={() => deleteHandler(id)}
              name={name}
              key={id}
              number={number}
            />
          ))
        )}
    </ul>
  </Section>
);
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};
export { Contacts };
