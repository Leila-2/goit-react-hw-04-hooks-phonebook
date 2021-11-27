import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section } from "../Section/Section";
import s from "../Form/Form.module.css";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    //console.log(this.state)
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    //console.log(this.state)
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Section title="Phonebook">
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="input-name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            id="input-name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor="input-number">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            id="input-number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </Section>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Form;
