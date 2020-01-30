import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handlechange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.value)
    // console.log(event.target.name);
  };

  render() {
    return (
      <div className="modal-container">
        <Button
          className="btn-secondary"
          color="danger"
          onClick={this.toggle}
          value="+"
        >
          Ajouter{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add new movie</ModalHeader>
          <ModalBody>
            <div className="add-card">
              <p className="card-title-add">Add Contact</p>

              <input
                name="nom"
                type="text"
                placeholder="Nom..."
                onChange={this.props.handleChange}
                value={this.props.contact.nom}
              />

              <input
                name="prenom"
                type="text"
                placeholder="Prenom..."
                onChange={this.props.handleChange}
                value={this.props.contact.prenom}
              />

              <input
                name="telephone"
                type="text"
                placeholder="telephone..."
                onChange={this.props.handleChange}
                value={this.props.contact.phone}
              />

              <input
                name="email"
                type="text"
                placeholder="Email..."
                onChange={this.props.handleChange}
                value={this.props.contact.email}
              />

              <input
                name="role"
                type="text"
                placeholder="Role..."
                onChange={this.props.handleChange}
                value={this.props.contact.role}
              />

              <select name="cars">
                <option value="magazinier">Magazinier</option>
                <option value="">GERANT</option>
                onChange={this.props.handleChange}
                value={this.props.contact.role}
              </select>
              <input type="submit" />

              {/* <input
                type="button"
                value="add contact"
                className="add-button"
                onClick={this.props.action}
              /> */}
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color="primary"
              className="add-btn"
              onClick={this.props.action}
            >
              validate
            </Button>{" "}
            <Button color="secondary" className="add-btn" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;
