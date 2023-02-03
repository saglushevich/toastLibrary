import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box
        margin: 0
        padding: 0
        list-style: none
        font-family: "Helvetica Neue";
    } 
`;

export const Container = styled.div`
  padding: 0 15px;
`;
