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
    CodeAbare:"",
    StockInitial: "",
    StockMinimum: "",
    StockSecurite: "",
    id: "",
    edit: false
  };
  getPerson = liste => {
    this.setState({
      CodeAbare:liste.CodeAbare,
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
      CodeAbare:"",
      StockInitial: "",
      StockMinimum: "",
      StockSecurite: "",
      id: ""
    });
  };
  addListe = () => {
    this.props.postListe(this.state);
    this.reset();
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

                      <th>
                        <b>StockInitial </b>{" "}
                      </th>
                      <th>
                        {" "}
                        <b>StockMinimum</b>{" "}
                      </th>
                      <th>
                        {" "}
                        <b>StockSecurite</b>{" "}
                      </th>
                      <th>
                        {" "}
                        <b>Action</b>{" "}
                      </th>
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
