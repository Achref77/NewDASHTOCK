import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProduits,
  deleteProduit,
  postProduits,
  putProduits
} from "../js/actions/actions";
import ProduitCard from "../components/produitCard/produitCard";
import { Grid, Row, Col, Table } from "react-bootstrap";

class Produit extends Component {
  state = {
    reference: "",
    nomProduit: "",
    prixAchat: "",
    prixVente: "",
    poids: "",
    id: "",
    edit: false
  };
  getProduit = produit => {
    this.setState({
      reference: produit.reference,
      nomProduit: produit.nomProduit,
      prixAchat: produit.prixAchat,
      prixVente: produit.prixVente,
      poids: produit.poids,
      id: produit._id,
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
      reference: "",
      nomProduit: "",
      prixAchat: "",
      prixVente: "",
      poids: ""
    });
  };
  addProduit = () => {
    this.props.postProduit(this.state);
    // this.reset();
  };

  componentDidMount = () => {
    this.props.getProduits();
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
                      <th> reference </th>
                      <th> nomProduit </th>
                      <th> prixAchat </th>
                      <th> prixVente </th>
                      <th> poids</th>
                      <th> Action </th>
                    </tr>
                  </thead>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
        {this.props.produits.map(el => (
          <ProduitCard
            deleteProduit={this.props.deleteProduit}
            postProduit={this.props.postProduit}
            getProduit={this.getProduit}
            produit={el}
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
  produits: state.Produits.produits
});
export default connect(MapStateToProps, {
  getProduits,
  deleteProduit
})(Produit);
