import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFournisseurs,
  deleteFournisseur,
  postFournisseurs,
  putFournisseurs
} from "../js/actions/actions";
import FournisseurCard from "../components/fournisseurCard/fournisseurCard";
import { Grid, Row, Col, Table } from "react-bootstrap";

class Fournisseur extends Component {
  state = {
    nomFournisseur: "",
    emailFournisseur: "",
    telephoneFournisseur: "",
    id: "",
    edit: false
  };
  getFournisseur = fournisseur => {
    this.setState({
      nomFournisseur: fournisseur.nomFournisseur,
      emailFournisseur: fournisseur.emailFournisseur,
      telephoneFournisseur: fournisseur.telephoneFournisseur,
      id: fournisseur._id,
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
      nomFournisseur: "",
      emailFournisseur: "",
      telephoneFournisseur: ""
    });
  };
  addFournisseur = () => {
    this.props.postFournisseur(this.state);
    // this.reset();
  };

  componentDidMount = () => {
    this.props.getFournisseurs();
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
                      <th> nomFournisseur </th>
                      <th> telephoneFournisseur </th>
                      <th> emailFournisseur </th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.fournisseurs.map(el => (
          <FournisseurCard
            deleteFournisseur={this.props.deleteFournisseur}
            postFournisseur={this.props.postFournisseur}
            getFournisseur={this.getFournisseur}
            fournisseur={el}
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
  fournisseurs: state.Fournisseurs.fournisseurs
});
export default connect(MapStateToProps, {
  getFournisseurs,
  deleteFournisseur
})(Fournisseur);
