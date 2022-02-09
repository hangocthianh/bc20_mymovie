import React from 'react';
import styled from 'styled-components';
import './style.css';

const Loader = styled.div`
  position: absolute;
  top: 3%;
  left: 3%;
  transform: translate(-50%, -50%);
  border: 5px solid #f8f3f3;
  border-radius: 50%;
  border-top: 5px solid ${props => props.primary ? "#3498db" : "red"};
  width: 40px;
  height: 40px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;

export default function Loading() {
  return (
    <div className="container-fluid" style={{
      position: 'relative',
      backgroundImage: 'url("img/loading2.webp")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>

      <Loader primary></Loader>
    </div>
  )
}