import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/dashboard">
              <i className="fa fa-home mr-1" />
              Dashboard <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/movie-list">
              <i className="fa fa-film mr-1" />
              Movies List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/user-management">
              <i className="fa fa-user mr-1" />
              Users List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
