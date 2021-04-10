import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 6vw;
    position: relative;
    z-index: 1;

    > h2 {
        font-weight: 300;
        font-size: 32px;
        margin-bottom: 15px;
    }
    > p {
        font-size: 15px;
    }
`;
