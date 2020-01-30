import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";

export default function ContactCart({ contact, deleteContact, getPerson }) {
  console.log('contact.email', contact.email)
  return (
    <div className='contact-card'>
      <div className='card-text'>
        <Table>
          <thead>
            <tr>
              <th > {contact.nom} </th>
              <th > {contact.prenom} </th>
              <th > {contact.email} </th>
              <th> {contact.telephone} </th>
              <th > {contact.role} </th>
              <th > {contact.action} </th>
              <th>
                <Link to='/edit-contact'>
                  <input
                    type='button'
                    value='Edit'
                    className='edit-button'
                    onClick={() => getPerson(contact)}
                  />
                </Link>
              </th>
              <th>
                <Link>
                  <input
                    type='button'
                    value='Delete'
                    className='edit-button'
                    onClick={() => deleteContact(contact._id)}
                  />
                </Link>
              </th>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
}
