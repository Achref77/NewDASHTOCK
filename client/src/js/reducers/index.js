import { combineReducers } from "redux";
import auth from "./auth";

import Stocks from "js/reducers/stock";

export default combineReducers({
  auth
});
