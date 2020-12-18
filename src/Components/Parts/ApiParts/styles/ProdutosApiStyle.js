import styled, { css } from "styled-components";
import { FacebookCircle, Github, Linkedin } from "../../../../styles/Icons";


export const Container = styled.div`
    background: linear-gradient(to right, #fff, #ddd);
    padding-top: 400px;
    padding-bottom: 120px;
`;
export const BackGroundFixed = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    min-height: 100vh;
    background-image: url('./assets/icon/triangle-background.png');
    background-repeat: no-repeat;
    background-position: right top;

`;
export const Centralize = styled.div`
    position: relative;
    z-index: 10;
    text-align: center;
    margin-bottom: 31px;
    > h2 {
        font-size: 28px;
        font-weight: 300;
    }
`;
export const SocialNetwork = styled.div`
    position: fixed;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    z-index: 11;

    top: 190px;
    left: 0;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

    background-color: white;

    @media (max-width: 768px){
        border-radius: 20px;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        top: unset;
        left: 0;
        bottom: 0;
    }
`;
export const Social = styled.div`
    padding: 23px 13px;

`;

const cssIcon = css`
    transition: 500ms ease;
    width: 40px;
    height: 40px;
`;
export const FacebookIcon = styled(FacebookCircle)`
    color: #1d3557;
    &:hover{
        color: #66fcf1;

    }

    ${cssIcon}
`;
export const LinkedinIcon = styled(Linkedin)`
    color: #ff4500;
    &:hover{
        color: #ffe66d;

    }
    ${cssIcon}
`;
export const GitHubIcon = styled(Github)`

    color: #d90429;
    &:hover{
        color: #6d3bb8;
    }
    ${cssIcon}
`;
