import React, { Component } from "react";

import ModalExample from "../components/user/modaleStock";

import { connect } from "react-redux";
import {
  getListe,
  deleteListe,
  postListe,
  putListe
} from "../js/actions/actions";
import ListCardStock from "../components/user/ListCardStock";

import { Grid, Row, Col, Table } from "react-bootstrap";

class App extends Component {
  state = {
    StockInitial: "",
    StockMinimum: "",
    StockSecurite: "",
    id: "",
    edit: false
  };
  getPerson = liste => {
    this.setState({
      StockInitial: liste.StockInitial,
      StockMinimum: liste.StockMinimum,
      StockSecurite: liste.StockSecurite,

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
      StockInitial: "",
      StockMinimum: "",
      StockSecurite: ""
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
      <div className='user-card'>
        <div className='user'>
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th> StockInitial </th>
                      <th> StockMinimum </th>
                      <th> StockSecurite </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.liste.map(el => (
          <ListCardStock
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
