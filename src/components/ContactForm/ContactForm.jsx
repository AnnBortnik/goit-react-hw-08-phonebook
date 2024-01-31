import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 15px;
  padding: 25px;
  background-color: lightblue;
`;

const StyledName = styled.span`
font-weight: bold;
`;

const StyledNumber = styled.span`
font-weight: bold;
`;

const LabelName = styled.label`
  display: flex;
  flex-direction: column;
`;

const InputName = styled.input`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const AddButton = styled.button`
    margin: 15px auto;
    width: 90px;
    height: 30px;
    background-color: darkblue;
    border-radius: 5px;
    border-style: none;
    transition: background-color 0.3s ease;
    color: white;

    &:hover, &:focus {
    background-color: turquoise;
    color: black;
    cursor: pointer;
}
`;

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = (event) => {
    let input = event.target.value;
    input = input.replace(/\D/g, "").slice(0, 8); 
    input = input.replace(/(\d{3})(\d{2})(\d{2})/, "$1-$2-$3"); 
    setNumber(input);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <LabelName>
        <StyledName>Name:</StyledName>
        <InputName
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Name"
        />
      </LabelName>
      <LabelName>
        <StyledNumber>Number:</StyledNumber>
        <InputName
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="222-22-22"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </LabelName>
      <AddButton type="submit">Add contact</AddButton>
    </FormContainer>
  );
};

export default ContactForm;