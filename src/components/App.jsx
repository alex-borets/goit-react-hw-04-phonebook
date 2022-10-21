import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import ContactsForm from './ContactsForm';
import css from './App.module.css';
import ContactsList from './ContactsList';
import { Filter } from './Filter';

export const App = () => {
  const { contacts, setContacts } = useLocalStorage();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // AddContact //
  const formSubmit = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  // DeleteContact //
  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const contactsName = contacts.map(contact => contact.name);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm onSubmit={formSubmit} contactsName={contactsName} />

      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />

      <ContactsList
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
