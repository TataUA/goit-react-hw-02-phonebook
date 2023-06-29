import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, SubTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = newContact => {
    const { contacts } = this.state;
    const newContactName = newContact.name.toLowerCase();

    const isExist = contacts.find(
      contact => contact.name.toLocaleLowerCase() === newContactName
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), ...newContact }, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.createContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onFilterContact={this.filterContact} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
