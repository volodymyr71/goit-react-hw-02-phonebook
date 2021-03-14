import React from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends React.Component {
  state = { name: "", number: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div className="Phonebook_block">
        <form className="Phonebook_form" onSubmit={this.handleSubmit}>
          <p>Name</p>
          <label id={uuidv4()}>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              id={uuidv4()}
              placeholder="Name"
            ></input>
          </label>
          <p>Number</p>

          <label id={uuidv4()}>
            <input
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
              id={uuidv4()}
              placeholder="Number"
            ></input>
          </label>

          <button className="Phonebook_block_button" type="submit">
            Add contacts
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
