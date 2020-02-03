import axios from "axios";
//get
export const getContacts = () => async dispatch => {
  axios
    .get("/contacts")
    .then(res => dispatch({ type: "GET-CONTACT", payload: res.data }))
    .catch(err => console.log(err));
};
//add
export const postContact = newcontact => async dispatch => {
  try {
    axios
      .post("/contacts", newcontact)
      .then(res => dispatch(getContacts()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete
export const deleteContact = id => async dispatch => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    console.log("body", res);
    dispatch(getContacts());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update
export const putContact = updatedContact => async dispatch => {
  try {
    const res = await axios.put(
      `/contacts/${updatedContact.id}`,
      updatedContact
    );
    // console.log("TCL: id", updatedContact.id);
    dispatch({ type: "UPDATE", payload: res.data });
  } catch (err) {
    console.error("", err.message);
  }
};

///////////////////////////STOCK///////////////////////////////////////////////


//get stock
export const getStocks = () => async dispatch => {
  axios
    .get("/stocks")
    .then(res => dispatch({ type: "GET-STOCK", payload: res.data }))
    .catch(err => console.log(err));
};

//add stock
export const postStock = newstock => async dispatch => {
  try {
    axios
      .post("/stocks", newstock)
      .then(res => dispatch(getStocks()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete stock
export const deleteStock = id => async dispatch => {
  try {
    const res = await axios.delete(`/stocks/${id}`);
    console.log("body", res);
    dispatch(getStocks());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update stock
export const putStock = updatedStock => async dispatch => {
  console.log("TCL: id", updatedStock.id);
  axios
    .put(`/stocks/${updatedStock.id}`, updatedStock)
    .then(res => dispatch({ type: "UPDATESTOCK", payload: res.data }))
    .catch(err => console.log(err));
};