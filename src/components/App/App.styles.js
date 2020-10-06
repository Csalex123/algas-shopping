import styled, { createGlobalStyle } from 'styled-components';
import bg from '../../assets/img/bg.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Lato', sans-serif;
  }
  
`;

export const Wrapper = styled.div`
    height: 100vh;
    background-color: #F8F5EC;
    background-image: url(${bg});
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    background-color: #FFF;

    width: 734px;
    height: 500px;

    box-shadow: 0 3px 10px rgba(0,0,0, .15);
    border-radius: 20px;
`;

