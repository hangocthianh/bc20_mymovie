import React, { useState } from 'react';
import MenuToggle from '@mui/material/Menu';
import MenuItemToggle from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import LoginModal from './_components/LoginModal';
import RegisterModal from './_components/RegisterModal';

import {
  Box,
  Container,
  Logo,
  NavLeft,
  NavRight,
  NavItem,
  HeaderLink,
} from './_components/HeaderStyles';
import {
  Menu,
  MenuItem,
  MenuLink,
  NavToggleClose,
  NavToggleOpen,
  CloseToggle
} from './_components/NavToggled'

function Header() {
  const isLogin = useSelector(state => state.headerReducer.isLogin);
  // Navbar Toggle
  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };
  // Login Modal Toggle
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLoginModal = () => setShowLogin(true);
  const handleCloseLoginModal = () => setShowLogin(false);
  // Register Modal Toggle
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  // User list actions toggle
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  
  // Handle sweetalert2
  const alertRegister = () => {
    Swal.fire({
      icon: 'success',
      title: 'Đăng ký thành công',
      confirmButtonText: 'OK'
    })
  }
  return (
    <>
      <Box>
        <Container>
          <NavToggleOpen
            className="animate__animated animate__fadeInRight"
            onClick={handleNavToggle}
          />
          <Logo to="/">
            IMOVIE
          </Logo>
          <NavLeft>
            <NavItem>
              <HeaderLink to="#">
                PHIM
              </HeaderLink>
            </NavItem>
            <NavItem>
              <HeaderLink to="#">
                THÔNG TIN RẠP
              </HeaderLink>
            </NavItem>
            <NavItem>
              <HeaderLink to="#">
                THÀNH VIÊN
              </HeaderLink>
            </NavItem>
            <NavItem>
              <HeaderLink to="#">
                KHUYẾN MÃI
              </HeaderLink>
            </NavItem>
          </NavLeft>
          <NavRight>
            {!localStorage.getItem("UserLogin") ?
              <>
                {/* Login Modal Toggle */}
                <Button
                  variant="text"
                  sx={{ color: 'white', fontSize: { xs: 11, md: 13 }, textTransform: 'capitalize' }}
                  onClick={handleShowLoginModal}
                  className="mt-1"
                >
                  Đăng nhập
                </Button>
                <LoginModal showLogin={showLogin} handleCloseLoginModal={handleCloseLoginModal} />
                {/* Register Modal Toggle */}
                <Button
                  variant="text"
                  sx={{ color: 'white', fontSize: { xs: 11, md: 13 }, textTransform: 'capitalize' }}
                  onClick={handleShowRegisterModal}
                  className="mt-1"
                >
                  Đăng ký
                </Button>
                <RegisterModal showRegisterModal={showRegisterModal} handleCloseRegisterModal={handleCloseRegisterModal} handleAlert={alertRegister} />
              </> :
              // Show userName & avatar when login success
              <>
                <span className="text-primary pr-2">{JSON.parse(localStorage.getItem("UserLogin")).content.taiKhoan}</span>
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
                      localStorage.removeItem("UserLogin");
                      handleClose();
                      handleCloseLoginModal();
                    }}
                  >
                    Logout
                  </MenuItemToggle>
                </MenuToggle>
              </>
            }
          </NavRight>
        </Container>
      </Box>
      {/* Show NavToggle when screen less than 768px */}
      {navToggled ?
        <NavToggleClose className="animate__animated animate__fadeIn">
          <Menu>
            <MenuItem className="animate__animated animate__fadeInRight">
              <MenuLink to="#">PHIM</MenuLink>
            </MenuItem>
            <MenuItem className="animate__animated animate__fadeInRight">
              <MenuLink to="#">THÔNG TIN RẠP</MenuLink>
            </MenuItem>
            <MenuItem className="animate__animated animate__fadeInRight">
              <MenuLink to="#">THÀNH VIÊN</MenuLink>
            </MenuItem>
            <MenuItem className="animate__animated animate__fadeInRight">
              <MenuLink to="#">KHUYẾN MÃI</MenuLink>
            </MenuItem>
          </Menu>
          <CloseToggle
            className="animate__animated animate__fadeInRight"
            animation-duration='2s'
            onClick={handleNavToggle}
          />
        </NavToggleClose > : null
      }

    </>
  )
}
export default Header;