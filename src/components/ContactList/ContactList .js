import React from "react";
import Section from "../Section/Section ";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <Section text="Contacts">
      <ul className={s.list}>
        {contacts.length === 0 ? (
          <p className={s.message}>Contact list is empty</p>
        ) : (
          contacts.map(({ name, id, number }) => (
            <ContactListItem
              deleteFunc={() => onDeleteContact(id)}
              name={name}
              key={id}
              number={number}
            />
          ))
        )}
      </ul>
    </Section>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};
