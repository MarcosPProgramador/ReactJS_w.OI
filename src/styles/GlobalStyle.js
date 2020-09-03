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
    ::selection{
        background-color: #b3d4fc;
        color: #f0f8ff;
    }
    *::-webkit-scrollbar{
        width: 7px;
        height: 7px;
        background-color: #f0f8ff;
    }
    *::-webkit-scrollbar-thumb{
        border-radius: 50rem;
        background-color: #ff4500;
    }
    html{
        scrollbar-color: #ff4500 #f0f8ff;
        scrollbar-width: thin;

    }
    html.active{
        scrollbar-width: none;
    }
    html.active::-webkit-scrollbar{
        display: none;
    }

    html.active body::-webkit-scrollbar{
        display: none;
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
    html.active body{
        overflow: hidden;
    }


`;
