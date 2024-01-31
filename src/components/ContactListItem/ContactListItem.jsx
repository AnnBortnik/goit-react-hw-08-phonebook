 import styled from 'styled-components';

const ButtonDel = styled.button`
  background-color: grey; 
  border: 1px solid black;
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  margin-left: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const ContactListItem = ({ contact, onDeleteContact }) => (
  <li>
    {contact.name}: {contact.number}
    <ButtonDel onClick={onDeleteContact}>Delete</ButtonDel>
  </li>
);

export default ContactListItem;