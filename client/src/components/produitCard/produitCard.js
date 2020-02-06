import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "../LoginUser/Login";
import EditModal from "../user/modaledit";
import { deleteProduit } from "../../js/actions/actions";

const ProduitCard = props => {
  console.log("TCL: props", props);
  const {
    _id,
    reference,
    nomProduit,
    prixAchat,
    prixVente,
    poids,
    action
  } = props.produit;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const delet = () => {
    dispatch(deleteProduit(_id));
  };
  return (
    <div className="contact-card">
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th> {reference} </th>
                    <th> {nomProduit} </th>
                    <th> {prixAchat} </th>
                    <th> {prixVente} </th>
                    <th> {poids} </th>
                    <th> {action} </th>
                    <th>
                      <i
                        class="fa fa-pencil-square-o"
                        aria-hidden="true"
                        onClick={() => setShow(true)}
                      ></i>
                      {/* <button onClick={() => setShow(true)}>edit</button> */}
                      <EditModal
                        isOpen={show}
                        toggle={setShow}
                        produit={props.produit}
                      />

                      {/* <img src={edit} /> */}

                      <i
                        className="fa fa-trash-o x"
                        aria-hidden="true"
                        style={{ minWidth: "223px", maxWidth: "180px" }}
                        onClick={() => dispatch(delet(_id))}
                      ></i>
                    </th>
                  </tr>
                </thead>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default ProduitCard;
