import styled from "styled-components";
import { Baidu } from '../../../styles/Icons'
export const Container = styled.div`
    padding: 5px 3%;
    display: flex;
    justify-content: center;

    backdrop-filter: blur(10px) ;
    box-shadow: 0 -2px 2px rgba(0,0,0,0.7);
    background-color: rgba(0,0,0,0.5);

    width: 100%;
    position: absolute;
    bottom: 0;
`;
export const LogoBread = styled(Baidu)`
    color: #ff4500;
    width: 32px;
    height: 32px;
`;