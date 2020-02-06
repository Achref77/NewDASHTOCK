import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getClients
  // deleteClient
  // postClients,
  // putClients
} from "../js/actions/actions";
import ClientCard from "../components/clientCard/clientCard";
import { Grid, Row, Col, Table } from "react-bootstrap";

class Client extends Component {
  state = {
    nomClient: "",
    prenomClient: "",
    emailClient: "",
    telephoneClient: "",
    id: "",
    edit: false
  };
  getClient = client => {
    this.setState({
      nomClient: client.nomClient,
      prenomClient: client.prenomClient,
      emailClient: client.emailClient,
      telephoneClient: client.telephoneClient,
      id: client._id,
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
      nomClient: "",
      PrenomClient: "",
      telephoneClient: "",
      emailClient: ""
    });
  };
  addClient = () => {
    this.props.postClient(this.state);
    // this.reset();
  };

  componentDidMount = () => {
    this.props.getClients();
  };
  render() {
    return (
      <div className="contact-card">
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th> nomClient </th>
                      <th> PrenomClient </th>
                      <th> telephoneClient </th>
                      <th> emailClient </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.clients.map(el => (
          <ClientCard
            // deleteClient={this.props.deleteClient}
            postClient={this.props.postClient}
            getClient={this.getClient}
            client={el}
          />
        ))}
        <Grid fluid>
          <Row>
            {/* <Col md={12}>
              <ModalExample
                handleChange={this.handleChange}
                stock={this.state}
                action={this.addStock}
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  clients: state.Clients.clients
});
export default connect(MapStateToProps, {
  getClients
  // deleteClient
})(Client);
