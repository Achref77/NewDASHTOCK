import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Row, Col, Table } from "react-bootstrap";
// import "./Login.css";
import EditModal from "./modaleeditstock";
import { deleteListe } from "../../js/actions/actions";
const ListCardStock = props => {
  console.log("TCL: props", props);
  const {
    _id,
    StockInitial,
    StockMinimum,
    StockSecurite,
    action
  } = props.liste;
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
    <div className='user-card'>
      <div className='content'>
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    <th> {StockInitial} </th>
                    <th> {StockMinimum} </th>
                    <th> {StockSecurite} </th>
                    <th> {action} </th>

                    <th>
                      <i
                        className='fa fa-pencil-square-o btn-action'
                        aria-hidden='true'
                        onClick={() => setShow(true)}
                      ></i>
                      <EditModal
                        isOpen={show}
                        toggle={setShow}
                        liste={props.liste}
                      />

                      <i
                        className='fa fa-trash-o x btn-action'
                        aria-hidden='true'
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
export default ListCardStock;
