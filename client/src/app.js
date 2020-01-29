import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FormPage from "./views/FormPage";
import Registeruser from "./views/Register";
import AdminLayout from "./layouts/Admin";
import { Spinner } from "reactstrap";
import { loadUser } from "js/actions/auth";

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  console.log('localStorage.getItem("token")', localStorage.getItem("token"));

  // useEffect(() => {
  //   // dispatch(loadUser(localStorage.getItem("token")));
  // });

  return loading ? (
    <Spinner color="primary" />
  ) : (
    <BrowserRouter>
      {isAuth && <Redirect to="/admin" />}
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/login" component={FormPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

{
  /* <Route path="/register" component={Registeruser} /> */
}
{
}
{
  /* <Redirect from="/" to="/login" /> */
}
