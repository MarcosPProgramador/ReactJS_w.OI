import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


    }
    html, body #root{

        min-width: 260px;
        max-height: 100vh;
        height: 100%;

    }
    body{
        overflow-x: hidden;
        background-color: var(--primary);
    }

    :root{
        --primary: #222632;
        --secondary: #293241;
        --search: #202327;
        --white: #f0f8fc;
        --outline: #2F3336;
        --gray: #7A7A7A;
        --green: #00C06B;
        --red: #E8265E;
        --blue: #33A1F2;
        --dark-hover: #E8265E10;
        --light-hover: #2C8ED6;


    }

`;
