import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <u>StyleBazar</u>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link px-4" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/allProducts">
              All_Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/orders">
               Orders
            </Link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
        <li className="nav-item">
          <button type="button" class="btn btn-default btn-sm m-2" onClick={()=>{localStorage.removeItem("isLogin"); window.location.reload()}}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
