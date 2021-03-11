import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  deleteItemPhonebook = (itemId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== itemId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className="App">
        <div className="Phonebook">
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={contacts}
            deleteItemPhonebook={this.deleteItemPhonebook}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
export default App;
