import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props) =>
        props.outlined ? "transparent" : "#ff4500"};
    border: 1px solid ${(props) => (props.outlined ? "#f0f8ff" : "#ff4500")};

    cursor: pointer;

    border-radius: 5px;
    padding: 10px 20px;

    color: #f0f8ff;
    font-weight: 500;
    letter-spacing: 1px;
`;
