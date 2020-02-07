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
      <div className='modal-container'>
        <Button
          // className="btn-secondary"
          // color="danger"
          onClick={this.toggle}
          value='+'
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
            <div className='add-card'>
              <p className='card-title-add'>Ajouter liste</p>
              <p>CodeAbarre</p>
              <input
                name='CodeAbarre'
                type='text'
                placeholder='CodeAbarre...'
                onChange={this.props.handleChange}
                value={this.props.liste.CodeAbarre}
              />
             
             
             
             
             
              <p>StockInitial</p>
              <input
                name='StockInitial'
                type='text'
                placeholder='StockInitial...'
                onChange={this.props.handleChange}
                value={this.props.liste.StockInitial}
              />
              <p>StockMinimum</p>
              <input
                name='StockMinimum'
                type='text'
                placeholder='StockMinimum...'
                onChange={this.props.handleChange}
                value={this.props.liste.StockMinimum}
              />
              <p>StockSecurite</p>{" "}
              <input
                name='StockSecurite'
                type='text'
                placeholder='StockSecurite...'
                onChange={this.props.handleChange}
                value={this.props.liste.StockSecurite}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" className="add-btn" onClick={() => this.props.add(this.state.addlist)} >validate</Button>{' '} */}
            <Button
              color='primary'
              className='add-btn'
              onClick={this.props.action}
            >
              valider
            </Button>{" "}
            <Button color='secondary' className='add-btn' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalExample;
