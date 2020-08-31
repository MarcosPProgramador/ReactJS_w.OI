import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        appearance: none;
        box-sizing: border-box;
        font-family: 'Roboto',Arial, Helvetica, sans-serif;

    }
    html,
    body,
    #root {

        height: 100%;
        min-height: 100vh;
        min-width: 260px;

    }
    body {

        overflow-x: hidden;
    }


`;
