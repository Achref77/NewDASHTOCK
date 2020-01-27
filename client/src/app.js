import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import FormPage from "./views/FormPage";
import Registeruser from "./views/Register";
import AdminLayout from "./layouts/Admin";
import { loadUser } from "js/actions/auth";

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser(localStorage.getItem("token")));
  }, []);

  return loading ? (
    "loding...."
  ) : (
    <BrowserRouter>
      <Switch>
        {isAuth && <Redirect to="/admin" />}
        <Route path="/login" component={FormPage} />
        {/* <Redirect from="/" to="/login" /> */}
        <Route path="/register" component={Registeruser} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
