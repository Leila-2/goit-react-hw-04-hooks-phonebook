import { Component } from "react";

import "./App.css";

import Form from "./components/Form/Form";
//import { Filter } from 'components/Filter/Filter';
import { Filter } from "./components/Filter/Filter";
import { Contacts } from "./components/Contacts/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const findContact = this.state.contacts.find(
      (contact) => contact.name === name
    );

    findContact
      ? alert(`${name} is already in contacts!`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  componentDidMount() {
    const myContacts = localStorage.getItem("contacts");

    const parseContacts = JSON.parse(myContacts);
    //console.log(this.state);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("Updated!)");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const newContacts = this.getContacts();
    const deleteContact = this.deleteContact;
    const onFilterChange = this.onFilterChange;
    return (
      <div className="App">
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={this.state.filter} onChange={onFilterChange} />
        <Contacts contacts={newContacts} deleteHandler={deleteContact} />
      </div>
    );
  }
}

export default App;
