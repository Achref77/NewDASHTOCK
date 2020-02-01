import React, { useState } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import './Login.css';
import EditModal from './modaledit';

const ContactCard = props => {
  console.log('TCL: props', props);
  const { nom, prenom, email, telephone, role, action } = props.contact;
  const [show, setShow] = useState(false);

  // console.log("contact.email", contact.email);
  return (
    <div className='contact-card'>
      <div className='content'>
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
                      <button onClick={() => setShow(true)}>edit</button>
                      <EditModal
                        isOpen={show}
                        toggle={setShow}
                        contact={props.contact}
                      />
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
