import styled from "styled-components";
export const Overlay = styled.div`
    min-width: 260px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(7px);
    background-color: rgba(0,0,0,0.5);
    z-index: 1;

`

export const Container = styled.div`

    padding-top: 130px;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    background-position: left top;
    background-image: url('./assets/img/background.jpg');

    & *{
        color: #f0f8ff;
    }

`;

