import { createStore, compose, applyMiddleware, combineReducers } from "redux";
// import Tttttt from "../reducers/index";
import thunk from "redux-thunk";
import Produits from "js/reducers/produit";
import Clients from "js/reducers/client";
import Stocks from "js/reducers/stock";
import Fournisseurs from "js/reducers/fournisseur";
import auth from "js/reducers/auth";
const middleWare = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const initialState = {
//   token: null,
//   isAuth: null,
//   loading: true,
//   user: {
//     nom: "",
//     email: "",
//     password: "",
//     avatar: ""
//   }
// };
const store = createStore(
  combineReducers({ auth, Stocks, Clients, Fournisseurs, Produits }),

  composeEnhancers(applyMiddleware(...middleWare))
);
export default store;
