import axios from "axios";
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

///////////////////////////CLIENT///////////////////////////////////////////////

//get client
export const getClients = () => async dispatch => {
  axios
    .get("/clients")
    .then(res => dispatch({ type: "GET-CLIENT", payload: res.data }))
    .catch(err => console.log(err));
};

//add client
export const postClient = newclient => async dispatch => {
  try {
    axios
      .post("/clients", newclient)
      .then(res => dispatch(getClients()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete client
// export const deleteClient = id => async dispatch => {
//   try {
//     const res = await axios.delete(`/clients/${id}`);
//     console.log("body", res);
//     dispatch(getClients());
//     // .catch(err => console.log(err));
//   } catch (err) {
//     console.error("", err.message);
//   }
// };
//update client
export const putClient = updatedClient => async dispatch => {
  console.log("TCL: id", updatedClient.id);
  axios
    .put(`/clients/${updatedClient.id}`, updatedClient)
    .then(res => dispatch({ type: "UPDATECLIENT", payload: res.data }))
    .catch(err => console.log(err));
};

///////////////////////////FOURNISSEUR///////////////////////////////////////////////

//get FOURNISSEUR
export const getFournisseurs = () => async dispatch => {
  axios
    .get("/fournisseurs")
    .then(res => dispatch({ type: "GET-FOURNISSEUR", payload: res.data }))
    .catch(err => console.log(err));
};

//add FOURNISSEUR
export const postFournisseur = newfournisseur => async dispatch => {
  try {
    axios
      .post("/fournisseurs", newfournisseur)
      .then(res => dispatch(getFournisseurs()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete FOURNISSEUR
export const deleteFournisseur = id => async dispatch => {
  try {
    const res = await axios.delete(`/fournisseurs/${id}`);
    console.log("body", res);
    dispatch(getFournisseurs());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update FOURNISSEUR
export const putFournisseur = updatedFournisseur => async dispatch => {
  console.log("TCL: id", updatedFournisseur.id);
  axios
    .put(`/fournisseurs/${updatedFournisseur.id}`, updatedFournisseur)
    .then(res => dispatch({ type: "UPDATEFOURNISSEUR", payload: res.data }))
    .catch(err => console.log(err));
};

///////////////////////////PRODUIT///////////////////////////////////////////////

//get PRODUIT
export const getProduits = () => async dispatch => {
  axios
    .get("/produits")
    .then(res => dispatch({ type: "GET-FOURNISSEUR", payload: res.data }))
    .catch(err => console.log(err));
};

//add PRODUIT
export const postProduit = newproduit => async dispatch => {
  try {
    axios
      .post("/produits", newproduit)
      .then(res => dispatch(getProduits()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete PRODUIT
export const deleteProduit = id => async dispatch => {
  try {
    const res = await axios.delete(`/produits/${id}`);
    console.log("body", res);
    dispatch(getProduits());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update PRODUIT
export const putProduit = updatedProduit => async dispatch => {
  console.log("TCL: id", updatedProduit.id);
  axios
    .put(`/produits/${updatedProduit.id}`, updatedProduit)
    .then(res => dispatch({ type: "UPDATEPRODUIT", payload: res.data }))
    .catch(err => console.log(err));
};
