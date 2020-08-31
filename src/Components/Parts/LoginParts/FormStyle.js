import styled, { css } from "styled-components";
import { UserCircle, LockPassword } from "../../../styles/Icons";

export const Container = styled.div`
    padding: 0 3%;
    padding-top: 90px;
    min-height: calc(100vh - 43px);

    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 1240px){

    }
`;
export const Content = styled.div`
    padding: 0 3%;

    margin-top: 60px;
    width: 600px;
    & > h2{
        margin-bottom: 15px;

        font-size: min(40px, max(6vw, 20px));
        font-weight: 300;
        color: #f0f8ff;
    }
    & > p {
        font-size: min(16px, max(3vw, 13px));
        color: #8d99ae;
    }
`;
export const WrapperForm = styled.div`
    margin-top: 60px;

    border-radius: 10px;
    padding: 60px 20px 160px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);

    width: 500px;
    > h2 {
        color: #f0f8ff;
        font-weight: 300;
        margin-bottom: 30px;
    }
`;
export const FormUser = styled.form`
    display: flex;
    flex-direction: column;
    & > button {
        margin-top: 15px;
    }
`;
export const WrapperInput = styled.div`
    &:nth-child(2) {
        margin-top: 30px;
    }

    position: relative;
    height: 50px;
    & > label {
        color: #8f99ae;
        font-weight: 500;

        pointer-events: none;
        user-select: none;

        position: absolute;
        top: 50%;
        left: 46px;
        transform: translateY(-50%);
    }
`;
export const Input = styled.input`
    border-radius: 10px;
    border: 0;
    height: 100%;
    width: 100%;

    padding: 12px 60px;
    & ~ label,
    & ~ svg {
        transition: 200ms ease-in-out;
        transition-property: width, height, color, top, font-size;
    }
    &:focus ~ svg {
        width: 20px;
        height: 20px;
    }
    &.error ~ label,
    &.error ~ svg {
    }
    &.complete ~ label,
    &.complete ~ svg {
    }
    &:focus ~ svg,
    &:focus ~ label {
        font-size: 12px;

        color: #f0f8ff;
        top: -15px;
    }
`;
export const LoginInfo = styled.div`
    margin-top: 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > span {
        font-size: min(17px, max(4vw, 10px));
        user-select: none;
        cursor: pointer;

        color: #888;
        transition: 500ms ease-in-out color;
        &:hover {
            color: #f0f8ff;
        }
    }
`;

const cssIcon = css`
    color: #8d99ae;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
`;
export const UserIcon = styled(UserCircle)`
    ${cssIcon}
`;
export const PassIcon = styled(LockPassword)`
    ${cssIcon}
`;
