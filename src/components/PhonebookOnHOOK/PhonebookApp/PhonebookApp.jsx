import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList/ContactList';
import css from './PhonebookApp.module.css';

export default function PhonebookApp() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (localStorage.contacts == !'') {
      const contactsArr = JSON.parse(localStorage.getItem('contacts'));
      console.log(contactsArr);
      if (contactsArr) {
        setContacts(contactsArr);
      }
    }
  }, [contacts]);

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
    setContacts(contacts.filter(contact => contact.id !== id));
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
