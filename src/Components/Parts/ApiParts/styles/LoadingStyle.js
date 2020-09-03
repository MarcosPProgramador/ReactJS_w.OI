import styled from "styled-components";
export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    
    background-color: white;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

`
export const Circle = styled.svg`
    width: 150px;
    height: 150px;
    stroke: #222632;
    stroke-width: 10;
    stroke-linecap: round;
    fill: none;
    animation: animate-rotate 800ms linear infinite;
    > circle{

        transform: translate(5px, 5px);
        width: 100%;
        height: 100%;
        stroke-dasharray: 217;

    }


    @keyframes animate-rotate{
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`