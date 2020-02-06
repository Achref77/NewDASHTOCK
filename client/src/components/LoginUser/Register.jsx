import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { register } from "../../js/actions/auth";
import logo from "assets/img/logoProject.png";
function RegisterPage(props) {
  const [newUser, setUser] = useState({
    nom: "",
    email: "",
    password: "",
    password2: ""
  });
  const dispatch = useDispatch();
  // const addUser = () => {
  //   dispatch(register(newUser));
  // };
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  function validateForm() {
    const { email, password } = newUser;
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(register(newUser))
      .then(data => props.history.push("/login"))
      .catch(err => console.log(err));
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <img src={logo} style={{ width: "200px", marginLeft: "10px" }} />
        <div className="Formulair">
          <FormGroup controlId="Name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="texe"
              value={newUser.nom}
              onChange={e => setUser({ ...newUser, nom: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={newUser.email}
              onChange={e => setUser({ ...newUser, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={newUser.password}
              onChange={e => setUser({ ...newUser, password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="password2" bsSize="large">
            <ControlLabel>Password2</ControlLabel>
            <FormControl
              value={newUser.password2}
              onChange={e => setUser({ ...newUser, password2: e.target.value })}
              type="password"
            />
          </FormGroup>
          <Button
            className="submitForm"
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
            onClick={event => handleSubmit(event)}
          >
            S'inscrire
          </Button>
        </div>
      </form>
    </div>
  );
}
export default RegisterPage;
