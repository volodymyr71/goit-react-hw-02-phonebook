import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ contacts, deleteItemPhonebook }) => (
  <div className="Phonebook_block">
    <p>ContactList</p>
    <ul>
      {contacts.map((contact) => (
        <li className="Phonebook_block_item" key={contact.id}>
          <p>
            {contact.name} {contact.number}
            <button
              onClick={() => deleteItemPhonebook(contact.id)}
              className="Phonebook_block_button"
            >
              delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  deleteItemPhonebook: PropTypes.func.isRequired,
};
