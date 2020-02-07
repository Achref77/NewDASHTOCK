import axios from "axios";
//get
export const getListe = () => async dispatch => {
  axios
    .get("/liste")
    .then(res => dispatch({ type: "GET-liste", payload: res.data }))
    .catch(err => console.log(err));
};
//add
export const postListe = newliste => async dispatch => {
  try {
    axios
      .post("/liste", newliste)
      .then(res => dispatch(getListe()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete
export const deleteListe = id => async dispatch => {
  try {
    const res = await axios.delete(`/liste/${id}`);
    console.log("body", res);
    dispatch(getListe());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update
export const putListe = updatedListe => async dispatch => {
  try {
    const res = await axios.put(`/liste/${updatedListe.id}`, updatedListe);

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
