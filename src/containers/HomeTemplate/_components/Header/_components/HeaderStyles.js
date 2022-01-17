import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.header`
  background-color: #000;
  position: relative;
  top: 0;
  width: 100%;
`;

export const Container = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  margin: auto;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #F08B23;
  font-size: 30px;
  font-weight: bold;
  flex-grow: 2;
  @media (max-width: 767px) {
    flex-grow: 2;
    text-align: center;
  }
`;

export const NavLeft = styled.ul`
  display: flex;
  align-items: center;
  margin: 0!important;
  flex-grow: 1;
  @media (max-width: 767px) {
    display: none
  }
`;

export const NavRight = styled.ul`
  display: flex;
  align-items: center;
  margin: 0!important;
  flex-grow: 1;
`;
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 40px;
  font-size: 13px;
  @media (max-width: 992px) {
    font-size: 0.73rem;
    margin-left: 18px;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none!important;
  color: #ffffff;
  :hover{
    color: #F08B23;
  }
`;

