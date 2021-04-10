import styled from "styled-components";
import { Baidu } from "../../../styles/Icons";
export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 6px 3%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;


    @media (min-width: 768px) {
        display: none;
    }
`;
export const LogoBread = styled(Baidu)`
    filter: drop-shadow(0 0 5px #f0f8ff);
    color: #f0f8ff;
    width: 43px;
    height: 43px;
`;
