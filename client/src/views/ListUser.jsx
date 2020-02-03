import React, { Component } from "react";

import ModalExample from "../components/user/modal";

import { connect } from "react-redux";
import {
  getListe,
  deleteListe,
  postListe,
  putListe
} from "../js/actions/actions";
import ListCard from "../components/user/ListCard";

import { Grid, Row, Col, Table } from "react-bootstrap";

class App extends Component {
  state = {
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "",
    id: "",
    edit: false
  };
  getPerson = liste => {
    this.setState({
      nom: liste.nom,
      prenom: liste.prenom,
      email: liste.email,
      password: liste.password,
      role: liste.role,
      id: liste._id,
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
      nom: "",
      prenom: "",
      email: "",
      password: "",
      role: ""
    });
  };
  addListe = () => {
    this.props.postListe(this.state);
    // this.reset();
  };

  componentDidMount = () => {
    this.props.getListe();
  };
  render() {
    return (
      <div className="user-card">
        <div className="user">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th> nom </th>
                      <th> Prenom </th>
                      <th> email </th>
                      <th> password </th>
                      <th> role </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.liste.map(el => (
          <ListCard
            deleteListe={this.props.deleteListe}
            putListe={this.props.putListe}
            getPerson={this.getPerson}
            liste={el}
          />
        ))}
        <Grid fluid>
          <Row>
            <Col md={12}>
              <ModalExample
                handleChange={this.handleChange}
                liste={this.state}
                action={this.addListe}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  liste: state.Reducer.liste
});
export default connect(MapStateToProps, {
  getListe,
  deleteListe,
  postListe,
  putListe
})(App);
