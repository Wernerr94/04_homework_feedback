import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contactsArr, onDelete }) {
  return (
    <ul className={css.contactsList}>
      {contactsArr.length > 0 &&
        contactsArr.map(contact => {
          return (
            <li key={contact.id} className={css.contact}>
              {contact.name}: {contact.number}
              <button
                className={css.deleteButton}
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
