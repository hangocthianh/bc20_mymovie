import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MenuToggle from '@mui/material/Menu';
import MenuItemToggle from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

export default function Navbar(props) {
  // User list actions toggle
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" to="/dashboard">IMOVIE</Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Avatar src="/broken-image.jpg" className="mt-1"></Avatar>
          </Button>
          {/* User list actions toggle */}
          <MenuToggle
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItemToggle onClick={handleClose}>Profile</MenuItemToggle>
            <MenuItemToggle onClick={handleClose}>My account</MenuItemToggle>
            <MenuItemToggle
              onClick={() => {
                localStorage.removeItem("UserAdmin");
                handleClose();
                history.push("/auth");
              }}
            >
              Logout
            </MenuItemToggle>
          </MenuToggle>
        </li>
      </ul>
    </nav>

  )
}
