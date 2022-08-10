import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList/ContactList';
import css from './PhonebookApp.module.css';
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function PhonebookApp() {
  const [contacts, setContacts] = useState(initialState);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsArr = JSON.parse(localStorage.getItem('contacts'));
    if (contactsArr) {
      setContacts(contactsArr);
    }
  }, []);

  const addUserToContacts = (id, name, number) => {
    const newUser = {
      id,
      name,
      number,
    };

    let obj = contacts.find(contact => contact.name === newUser.name);
    if (obj) {
      alert(`${newUser.name} is already in contcts.`);
      return;
    } else {
      setContacts([newUser, ...contacts]);
      localStorage.setItem('contacts', JSON.stringify([newUser, ...contacts]));
    }
  };
  const changeFilterValue = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredArr = getFilteredContacts();
  const handleDelete = id => {
    const users = contacts.filter(contact => contact.id !== id);
    setContacts(users);
    localStorage.setItem('contacts', JSON.stringify(users));
  };
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm contactsArr={contacts} onSubmit={addUserToContacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterValue} />
      <ContactList contactsArr={filteredArr} onDelete={handleDelete} />
    </div>
  );
}
