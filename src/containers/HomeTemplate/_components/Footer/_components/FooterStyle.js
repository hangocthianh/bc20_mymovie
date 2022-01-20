import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.footer`
  width: 100%;
  background-color: #000;
  position: relative;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 0 20px;
  display: grid;
  gap: 10px 10px;
  justify-items: center;
  grid-template-columns: repeat(4,1fr);
  @media (max-width: 991px) {
    grid-template-columns: repeat(2,1fr);
  };
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  padding: 20px 0;
  width: 100%;
  max-width: 250px;
  
`;
export const ColumnTitle = styled.h6`
  font-weight: bold;
  color: #F08B23;
`;
export const List = styled.ul`
  padding: 0;
  line-height: 2;
`;

export const ListItem = styled.li`
  list-style: none;
  color: #fff;
  font-size: 15px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none!important;
  color: #fff;
  &:hover {
    color: #F08B23;
  }
`