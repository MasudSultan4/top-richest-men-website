import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#E-commerce">World Richest Man</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Shops">All Man </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Categories">Work</a>
              </li>



            </ul>
            <form className="d-flex flex-fill mx-5">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="bg-success add-style">
          <h1>Make an Richest people in the world</h1>
          <h4> Here’s a quick recap of the top 21 richest people in the world in 2021:
          </h4>
          <h2>Total-Worth: 30 Million</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;