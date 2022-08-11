import ContactsForm from './ContactsForm';
import css from './App.module.css';
import { Component } from 'react';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmit = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === newContact.name)
        ? alert(`${name} is already is contacts.`)
        : { contacts: [newContact, ...contacts] }
    );
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmit} />

        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.handleChange} />

        <ContactsList contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}
