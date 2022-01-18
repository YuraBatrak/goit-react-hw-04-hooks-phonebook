import "./App.css";
import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList ";
import shortid from "shortid";
import useLocalStorage from "./storage/useLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid(),
      name,
      number,
    };
    const findMap = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    findMap
      ? alert(`${name} is already in contacts!`)
      : setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="App">
      <ContactForm onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
