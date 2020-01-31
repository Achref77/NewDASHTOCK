import React, { useState } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./Login.css";
import ModalExample from "./modal";
import { useDispatch } from "react-redux";

const ContactCard = props => {
  const { nom, prenom, email, telephone, role, action } = props.contact;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // console.log("contact.email", contact.email);
  return (
    <div className="contact-card">
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th> {nom} </th>
                    <th> {prenom} </th>
                    <th> {email} </th>
                    <th> {telephone} </th>
                    <th> {role} </th>
                    <th> {action} </th>
                    <th>
                      <button onClick={setShow(true)}>edit</button>
                      <ModalExample isOpen={show} toggle={setShow} />
                      {/* <ModalExample handleChange={handleChange} /> */}
                      {/* <i
                          class="fa fa-pencil-square-o"
                          aria-hidden="true"
                          onClick={() => getPerson(contact)}
                        ></i>
                       */}
                      {/* <img src={edit} /> */}
                      {/* 
                      <i
                        className="fa fa-trash-o x"
                        aria-hidden="true"
                        style={{ minWidth: "223px", maxWidth: "180px" }}
                        onClick={() => deleteContact(contact._id)}
                      ></i> */}
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

export default ContactCard;
