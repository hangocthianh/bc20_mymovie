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
  @media (max-width: 828px) {
    width: 87%;
  };
`;

export const Logo = styled(Link)`
  text-decoration: none!important;
  color: #F08B23;
  font-size: 30px;
  font-weight: bold;
  flex-grow: 2;
  margin-bottom: 0!important;
  &:hover{
    color: #F08B23;
  }
  @media (max-width: 828px) {
    text-align: left;
    margin-left: 20px;
    font-size: 26px;
  };
  @media (max-width: 450px) {
    font-size: 22px;
    padding-left: 5px;
    flex-grow: 1;
  };
`;

export const NavLeft = styled.ul`
  display: flex;
  align-items: center;
  margin: 0!important;
  flex-grow: 1;
  @media (max-width: 767px) {
    display: none
  }
  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const NavRight = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0!important;
  flex-grow: 1;
  @media (max-width: 1200px) {
    & span{
      display: none;
    }
  }
  @media (max-width: 767px) {
    & span{
      display: block;
    }
  }
  @media (max-width: 450px) {
    padding: 0 !important;
    justify-content: center;
  }
  @media (max-width: 390px) {
    & span{
      display: none;
    }
  }
`;
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 40px;
  font-size: 13px;
  padding-top: 3px;
  @media (max-width: 991px) {
    font-size: 0.8rem;
    margin-left: 20px;
  };
  @media (max-width: 828px) {
    margin-left: 18px;
  };
`;

export const HeaderLink = styled(Link)`
  text-decoration: none!important;
  color: #ffffff;
  &:hover{
    color: #F08B23;
  }
`;

