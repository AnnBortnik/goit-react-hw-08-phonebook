import React from 'react';
import styled from 'styled-components';

const ItemList = styled.ul`
 list-style: none;
`;

const ContactList = ({ contacts, onDeleteContact }) => (
  <ItemList>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ItemList>
);

export default ContactList;