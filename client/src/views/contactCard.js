import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./Login.css";
import EditModal from "./modaledit";
import { deleteContact } from "../js/actions/actions";
const ContactCard = props => {
  console.log("TCL: props", props);
  const { _id, nom, prenom, email, telephone, role, action } = props.contact;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const delet = () => {
    dispatch(deleteContact(_id));
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
                    <th> {nom} </th>
                    <th> {prenom} </th>
                    <th> {email} </th>
                    <th> {telephone} </th>
                    <th> {role} </th>
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
                        contact={props.contact}
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

export default ContactCard;
