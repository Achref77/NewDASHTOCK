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
  console.log("TCL: id", updatedContact.id);
  axios
    .put(`/contacts/${updatedContact.id}`, updatedContact)
    .then(res => dispatch({ type: "UPDATE", payload: res.data }))
    .catch(err => console.log(err));
};
