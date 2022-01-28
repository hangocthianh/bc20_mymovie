import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.8);
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  & .slick-prev{
    background-color: #F08B23;
    height: 50px;
    width: 25px;
    border-radius: 50% 0 0 50%;
  };
  & .slick-next{
    background-color: #F08B23;
    height: 50px;
    width: 25px;
    border-radius: 0 50% 50% 0;
  };
  & .slick-dots{
    display: none!important;
  }
`;

export const SectionTitle = styled.div`
  background: url("./img/bg_h3_line.jpg") repeat-x scroll left center rgba(0, 0, 0, 0);
  height: 54px;
  text-align: center;
  width: 100%;
  @media only screen and (max-width:992px){
    height: 40px;
  }
`;

export const SectionHeader = styled.h2`
  background: no-repeat scroll center center / 365.4px 37px #FDFCF0;
  display: inline-block;
  width: 382.5px;
  height: 54px;
  text-indent: -99999px;
  &.movie-selection{
    background-image: url('./img/movie-selection-bg.gif')
  };
  &.coming-soon{
    background-image: url('./img/coming-soon-bg.gif')
  }
  @media only screen and (max-width:992px){
    background: no-repeat scroll center center / 271px 27px #FDFCF0;
    width: 284px;
    height: 40px;
  }
`;