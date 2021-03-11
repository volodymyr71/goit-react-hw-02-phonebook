import React from "react";

class ContactForm extends React.Component {
  state = { name: "", number: "" };

  // const {name, number} = this.state

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Phonebook_block">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              placeholder="Name"
            ></input>
          </label>
          <label>
            Number
            <input
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
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
