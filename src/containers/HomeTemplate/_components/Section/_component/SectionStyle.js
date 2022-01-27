import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: auto;
  padding: 0 20px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  & .slick-prev{
    background-color: green;
    height: 50px;
    width: 25px;
    border-radius: 50% 0 0 50%;
  };
  & .slick-next{
    background-color: green;
    height: 50px;
    width: 25px;
    border-radius: 0 50% 50% 0;
  }
`