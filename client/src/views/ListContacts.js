import React, { Component } from "react";
import ModalExample from "./modal";
import { connect } from "react-redux";
import {
  getContacts,
  deleteContact,
  postContact,
  putContact
} from "../../src/js/actions/actions";
import ContactCard from "./contactCard";

class App extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    id: "",
    edit: false
  };

  getPerson = contact => {
    this.setState({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      id: contact._id,
      edit: true
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  reset = () => {
    this.setState({
      name: "",
      phone: "",
      email: ""
    });
  };
  addContact = () => {
    this.props.postContact(this.state);
    this.reset();
  };

  componentDidMount = () => {
    this.props.getContacts();
  };

  render() {
    return (
      <div className="contact-list">
        {this.props.contacts.map(el => (
          <ContactCard
            deleteContact={this.props.deleteContact}
            getPerson={this.getPerson}
            contact={el}
          />
        ))}
        <ModalExample
          handleChange={this.handleChange}
          contact={this.state}
          action={this.addContact}
        />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  contacts: state.Reducer.contacts
});

export default connect(MapStateToProps, {
  getContacts,
  deleteContact,
  putContact,
  postContact
})(App);
