import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
`;

export const CardWrapper = styled.div`
  position: relative;
  transition: all 2s;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const CardTitle = styled.h6`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

export const CardFooter = styled.div`
  display:none;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0,0.7);
  padding: 10px 0;
  border-radius: 0 0 5px 5px;
  transition: all 2s;
  ${CardWrapper}:hover & {
    display:block;
    transition: all 2s;
  }
`;

export const CardPlay = styled.button`
  display:none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.65rem;
  background-color:#e71a0f;
  padding: 5px 12px;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  ${CardWrapper}:hover & {
    display:block;
  };
  @media (max-width: 992px) {
    top: 40%;
  };
  @media (max-width: 768px) {
    padding: 5px 10px;
    span{
      display: none;
    }
  };
`;

export const CardDetails = styled(Link)`
  background-color:#e71a0f;
  padding: 5px 10px;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none!important;
  font-weight: 500;
  font-size: 0.8rem;
  &:hover{
    color: #ffffff;
  };
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  };
`;

export const CardBook = styled.button`
  background-color:#e71a0f;
  padding: 0 10px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.8rem;
  &:disabled{
    cursor: no-drop;
  };
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
`;