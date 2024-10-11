import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-color: blue;
    }
    body{
        background-color: var(--background-color);

    }
`
