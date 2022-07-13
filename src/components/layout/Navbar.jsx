import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
            <Link className="navbar-brand" to="/">
              Admin Penal
            </Link>
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <Link className='btn btn-outline-light' exact to="user/addUser">Add user</Link> */}
        </div>
      </nav>
    );
};

export default Navbar;