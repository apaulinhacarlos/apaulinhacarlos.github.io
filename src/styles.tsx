import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
  
export const GlobalStyle = createGlobalStyle`
  /* Aqui criamos um reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #333;
  }
  
  h1 {
    color: white;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background-color: #022c16;
  color: #ffffff;
  margin-bottom: 3em;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;