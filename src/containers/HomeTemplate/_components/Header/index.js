import React, { useState } from 'react';
import Button from '@mui/material/Button';

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
  const [navToggled, setNavToggled] = useState(false);
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }
  return (
    <>
      <Box>
        <Container>
          <NavToggleOpen
            className="animate__animated animate__fadeInRight"
            onClick={handleNavToggle}
          />
          <Logo>
            Logo
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
            <Button
              variant="text"
              sx={{ color: 'white', fontSize: { xs: 11, md: 13 }, textTransform: 'capitalize' }}
            >
              Đăng nhập
            </Button>
            <Button
              variant="text"
              sx={{ color: 'white', fontSize: { xs: 11, md: 13 }, textTransform: 'capitalize' }}
            >
              Đăng ký
            </Button>
          </NavRight>
        </Container>
      </Box>
      {navToggled ?
        <NavToggleClose className="animate__animated animate__fadeInRight">
          <Menu>
            <MenuItem>
              <MenuLink to="#">PHIM</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="#">THÔNG TIN RẠP</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="#">THÀNH VIÊN</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="#">KHUYẾN MÃI</MenuLink>
            </MenuItem>
          </Menu>
          <CloseToggle
            className="animate__animated animate__fadeInRight"
            animation-duration = '2s'
            onClick={handleNavToggle}
          />
        </NavToggleClose > : null
      }

    </>
  )
}
export default Header;