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
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="modal-container">
        <Button
          // className="btn-secondary"
          // color="danger"
          onClick={this.toggle}
          value="+"
        >
          Ajouter{this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.state.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Ajouter nouveau utilisateur
          </ModalHeader>
          <ModalBody>
            <div className="add-card">
              <p className="card-title-add">Ajouter liste</p>
              <p>Nom</p>
              <input
                name="nom"
                type="text"
                placeholder="Nom..."
                onChange={this.props.handleChange}
                value={this.props.liste.nom}
              />
              <p>Prenom</p>
              <input
                name="prenom"
                type="text"
                placeholder="Prenom..."
                onChange={this.props.handleChange}
                value={this.props.liste.prenom}
              />
              <p>Email</p>{" "}
              <input
                name="email"
                type="text"
                placeholder="Email..."
                onChange={this.props.handleChange}
                value={this.props.liste.email}
              />
              <p>Password</p>{" "}
              <input
                name="password"
                type="password"
                placeholder="password..."
                onChange={this.props.handleChange}
                value={this.props.liste.password}
              />
              <p>Role</p>
              <select
                name="role"
                onChange={this.props.handleChange}
                value={this.props.liste.role}
              >
                <option value="choisir un role">choisir Le role</option>
                <option value="Admin">Admin</option>
                <option value="GERANT">GERANT</option>
                <option value="magazinier">Magazinier</option>
                <input type="submit" />
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color="primary"
              className="add-btn"
              onClick={this.props.action}
            >
              valider
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
