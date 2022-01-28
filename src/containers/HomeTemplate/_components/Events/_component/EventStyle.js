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

export const EventTitle = styled.div`
  background: url("./img/bg_h3_line.jpg") repeat-x scroll left center rgba(0, 0, 0, 0);
  height: 54px;
  text-align: center;
  width: 100%;
  @media only screen and (max-width:992px){
    height: 40px;
  }
`;

export const EventHeader = styled.h2`
  background: url("./img/event-bg.gif") no-repeat scroll center center / 180px 37px #FDFCF0;
  display: inline-block;
  width: 195px;
  height: 54px;
  text-indent: -99999px;
  @media only screen and (max-width:992px){
    background: url("./img/event-bg.gif") no-repeat scroll center center / 134px 27px #FDFCF0;
    width: 140px;
    height: 40px;
  }
`;

export const EventImg = styled.img`
  width: 100%;
`;
export const EventLink = styled.a`
  &:hover {
    opacity: 0.5;
  }
`;