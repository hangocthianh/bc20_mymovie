import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  position: relative;
  height: 400px;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 550px;
  over-flow: hidden;
  @media (max-width: 991px){
    height: 450px;
  }
  @media (max-width: 767px){
    height: 350px;
  }
  @media (max-width: 575px){
    height: 280px;
  }
`