import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
// import "./Login.css";
import EditModal from "./modaledit";
import { deleteListe } from "../../js/actions/actions";
const ListCard = props => {
  console.log("TCL: props", props);
  const { _id, nom, prenom, email, role, password, action } = props.liste;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const delet = () => async dispatch => {
    try {
      await dispatch(deleteListe(_id));
    } catch (err) {
      console.error("", err.message);
    }
  };
  return (
    <div className="user-card">
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
                    <th> {password} </th>
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
                        liste={props.liste}
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
export default ListCard;
