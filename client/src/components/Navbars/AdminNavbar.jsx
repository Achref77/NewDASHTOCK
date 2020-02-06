import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import jwt_decode from "jwt-decode";
class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }

  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <p>
            <i className="fa fa-user" />{" "}
            {jwt_decode(localStorage.getItem("token")).user.prenom}{" "}
            {jwt_decode(localStorage.getItem("token")).user.nom} {"|"}{" "}
            {jwt_decode(localStorage.getItem("token")).user.role}
          </p>
          <Navbar.Brand>
            <a href="#pablo">{this.props.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Header);
