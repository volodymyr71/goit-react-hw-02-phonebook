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

  addItemPhonebook = (data) => {
    if (data.name === "" || data.number === "") {
      alert("need name & number");
      return;
    }

    let testIncludes = false;
    this.state.contacts.forEach((item) => {
      if (item.name === data.name) {
        testIncludes = true;
      }
    });
    if (testIncludes) {
      alert(data.name + " is alredy in contacts");
      return;
    }

    const newItem = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState((prevState) => ({
      contacts: [newItem, ...prevState.contacts],
    }));
  };

  deleteItemPhonebook = (itemId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((item) => item.id !== itemId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredPhonebook = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="App">
        <div className="Phonebook">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addItemPhonebook} />

          <h2>Contacts</h2>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList
            contacts={filteredPhonebook}
            deleteItemPhonebook={this.deleteItemPhonebook}
            // handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
export default App;
