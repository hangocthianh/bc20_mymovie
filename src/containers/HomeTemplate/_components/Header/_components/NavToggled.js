import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

//Nav menu
export const Menu = styled.ul`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  width: 100%;
  list-style-type: none;
  font-size: 25px;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #F08B23;
  }
`;
export const MenuLink = styled(Link)`
  text-decoration: none!important;
  color: #ffffff;
  font-weight: bold;
  ${MenuItem}:hover & {
    color: #F08B23
  }
`;
//Nav Toggle Close
export const NavToggleClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: none;
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(3px);
  z-index: 100;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CloseToggle = styled(FaTimes)`
  position: fixed;
  top: 10%;
  right: 5%;
  background: transparent;
  color: #F08B23;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 4rem;
  cursor: pointer;
  animation-delay: 1s;
`;
//Nav Toggle Open
export const NavToggleOpen = styled(FaBars)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;
  @media (max-width: 767px) {
    display: flex;
    place-items: center;
  };
  @media (max-width: 450px) {
    font-size: 1.4rem;
  };
`;