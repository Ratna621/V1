import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const location = useLocation();
  const isProductsActive = () => {
    const activePaths = ['/product', '/p2p'];
    return activePaths.some(path => location.pathname.startsWith(path));
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navrow">
        <NavLink className="navbar-brand" to="/">
          <img className="logo" src="/images/alpyne-logo.svg" alt="Alpyne logo" />
        </NavLink>
        <div>
          <div className="mobdisplay">
            <div className="formobile">
              <a href="#" className="button-pink shadow">
                Schedule a demo
              </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <div 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false" 
                  className={`nav-link ${isProductsActive() ? 'active' : ''}`}
                >
                  <span className="dropdown-toggle">Products</span>
                  <img className="inactive-icon" src="/images/down-arrow.svg" alt="arrow" />
                  <img className="active-icon" src="/images/down-arrow-pink.svg" alt="arrow" />
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      to="/product"
                      className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                    >
                      <img className="inactive-icon" src="/images/logo-icon-gray.png" alt="icon" />
                      <img className="active-icon" src="/images/logo-icon-pink.png" alt="icon" />
                      Alpyne Pay
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/p2p"
                      className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}
                    >
                      <img className="inactive-icon" src="/images/logo-icon-gray.png" alt="icon" />
                      <img className="active-icon" src="/images/logo-icon-pink.png" alt="icon" />
                      Alpyne P2P
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
